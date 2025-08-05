import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCcw, Share2, Heart, ChevronUp, ChevronDown, Settings, BookOpen, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const EpisodeReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  // Mock episode data
  const episode = {
    id: 1,
    title: "The Awakening",
    comicTitle: "Shadow Hunter Chronicles",
    comicId: 1,
    totalPages: 24,
    pages: [
      "/lovable-uploads/4e6b2521-dc40-43e9-aed0-53fef670570b.png",
      "/lovable-uploads/6ce223e4-a7e8-4282-a3a6-0f55f5341a03.png",
      "/lovable-uploads/781ea40e-866e-4ee8-9bf7-862a42bb8716.png",
      "/lovable-uploads/97f88fee-e070-4d97-a73a-c747112fa093.png",
      "/lovable-uploads/9c2bfe8c-6585-45b0-bc73-7b72048725ee.png",
      "/lovable-uploads/a0c88e05-5aba-4550-8ee0-7644ad456776.png"
    ]
  };

  const nextEpisode = {
    id: 2,
    title: "First Hunt",
    isLocked: false
  };

  useEffect(() => {
    const progress = (currentPage / episode.totalPages) * 100;
    setReadingProgress(progress);
  }, [currentPage, episode.totalPages]);

  // Auto-hide controls
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isFullscreen) {
      timer = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isFullscreen, showControls]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < episode.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
    }
  };

  const resetZoom = () => {
    setZoomLevel(100);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowControls(true);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        handlePreviousPage();
        break;
      case 'ArrowRight':
        handleNextPage();
        break;
      case 'Escape':
        if (isFullscreen) setIsFullscreen(false);
        break;
      case 'f':
        toggleFullscreen();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  const currentPageIndex = Math.min(currentPage - 1, episode.pages.length - 1);

  if (isFullscreen) {
    return (
      <div 
        className="fixed inset-0 bg-black z-50 flex flex-col"
        onMouseMove={() => setShowControls(true)}
      >
        {/* Top Controls */}
        <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 transition-opacity duration-300 z-10 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsFullscreen(false)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Fullscreen
              </Button>
              <span className="text-sm">{episode.comicTitle} - {episode.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleZoomOut} disabled={zoomLevel <= 50}>
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm">{zoomLevel}%</span>
              <Button variant="ghost" size="sm" onClick={handleZoomIn} disabled={zoomLevel >= 200}>
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={resetZoom}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Reading Area */}
        <div className="flex-1 flex items-center justify-center p-4">
          <img 
            src={episode.pages[currentPageIndex]} 
            alt={`Page ${currentPage}`}
            className="max-w-full max-h-full object-contain"
            style={{ transform: `scale(${zoomLevel / 100})` }}
          />
        </div>

        {/* Bottom Controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 z-10 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center text-white mb-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <span className="text-sm">
              Page {currentPage} of {episode.totalPages}
            </span>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleNextPage}
              disabled={currentPage === episode.totalPages}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <Progress value={readingProgress} className="h-1" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate(`/comic/${episode.comicId}`)}
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Comic
              </Button>
              <div>
                <h1 className="text-white font-semibold">{episode.title}</h1>
                <p className="text-gray-400 text-sm">{episode.comicTitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="text-gray-400 hover:text-white">
                <BookOpen className="w-4 h-4" />
                Fullscreen
              </Button>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
              <span>Page {currentPage} of {episode.totalPages}</span>
              <span>{Math.round(readingProgress)}% complete</span>
            </div>
            <Progress value={readingProgress} className="h-1" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Reading Controls Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="bg-gray-800 border-gray-700 sticky top-24">
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-4">Reading Controls</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Zoom Level</label>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={handleZoomOut} disabled={zoomLevel <= 50}>
                        <ZoomOut className="w-3 h-3" />
                      </Button>
                      <span className="text-white text-sm flex-1 text-center">{zoomLevel}%</span>
                      <Button variant="outline" size="sm" onClick={handleZoomIn} disabled={zoomLevel >= 200}>
                        <ZoomIn className="w-3 h-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" onClick={resetZoom} className="w-full mt-2 text-gray-400">
                      <RotateCcw className="w-3 h-3 mr-2" />
                      Reset
                    </Button>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Quick Navigation</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                      >
                        <ChevronUp className="w-3 h-3 mr-1" />
                        Prev
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleNextPage}
                        disabled={currentPage === episode.totalPages}
                      >
                        Next
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>

                  <Button 
                    onClick={toggleFullscreen}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Fullscreen Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Reading Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-gray-900 rounded-lg p-4 min-h-[600px] flex items-center justify-center">
              <img 
                src={episode.pages[currentPageIndex]} 
                alt={`Page ${currentPage}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              />
            </div>

            {/* Page Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                variant="outline" 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="border-gray-700 text-gray-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous Page
              </Button>
              
              <div className="text-center">
                <div className="text-white font-semibold">Page {currentPage}</div>
                <div className="text-gray-400 text-sm">of {episode.totalPages}</div>
              </div>
              
              <Button 
                variant="outline" 
                onClick={handleNextPage}
                disabled={currentPage === episode.totalPages}
                className="border-gray-700 text-gray-300"
              >
                Next Page
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Next Episode Prompt */}
            {currentPage === episode.totalPages && (
              <Card className="bg-gray-800 border-gray-700 mt-6">
                <CardContent className="p-6 text-center">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    🎉 Episode Complete!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    You've finished reading "{episode.title}". Ready for the next episode?
                  </p>
                  
                  {nextEpisode.isLocked ? (
                    <div className="space-y-3">
                      <Button 
                        onClick={() => navigate(`/episode/${nextEpisode.id}/preview`)}
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Unlock Next Episode
                      </Button>
                      <p className="text-gray-400 text-sm">
                        Next: {nextEpisode.title}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button 
                        onClick={() => navigate(`/episode/${nextEpisode.id}/read`)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Next Episode
                      </Button>
                      <p className="text-gray-400 text-sm">
                        Next: {nextEpisode.title}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeReader;