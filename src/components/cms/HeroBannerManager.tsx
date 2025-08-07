import { useState } from 'react';
import { useHeroBanners } from '@/hooks/useHeroBanners';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, Save, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BannerForm {
  title: string;
  subtitle: string;
  image_url: string;
  display_order: number;
  is_active: boolean;
}

export const HeroBannerManager = () => {
  const { banners, isLoading, createBanner, updateBanner, deleteBanner, loadHeroBanners } = useHeroBanners();
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<BannerForm>({
    title: '',
    subtitle: '',
    image_url: '',
    display_order: 1,
    is_active: true,
  });

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      image_url: '',
      display_order: 1,
      is_active: true,
    });
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateBanner(editingId, formData);
        toast({
          title: "Success",
          description: "Banner updated successfully",
        });
      } else {
        await createBanner(formData);
        toast({
          title: "Success",
          description: "Banner created successfully",
        });
      }
      resetForm();
      // Force reload to ensure data is fresh
      await loadHeroBanners();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save banner",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (banner: any) => {
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle,
      image_url: banner.image_url,
      display_order: banner.display_order,
      is_active: banner.is_active,
    });
    setEditingId(banner.id);
    setShowAddForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this banner?')) {
      try {
        await deleteBanner(id);
        toast({
          title: "Success",
          description: "Banner deleted successfully",
        });
        // Force reload to ensure data is fresh
        await loadHeroBanners();
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete banner",
          variant: "destructive",
        });
      }
    }
  };

  if (isLoading) {
    return <div className="p-4">Loading hero banners...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Hero Banners Management</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Create up to 3 rotating banner slides for your home page
            </p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            disabled={banners.length >= 3}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Banner {banners.length >= 3 && "(Max 3)"}
          </Button>
        </CardHeader>
        <CardContent>
          {banners.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                No hero banners created yet. Start by adding your first banner to display on the home page carousel.
              </p>
              <p className="text-sm text-muted-foreground">
                You can add up to 3 hero banners that will be displayed as a rotating carousel on your website's home page.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {banners.map((banner) => (
                <Card key={banner.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{banner.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{banner.subtitle}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Order: {banner.display_order}</span>
                          <span>Status: {banner.is_active ? 'Active' : 'Inactive'}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEdit(banner)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDelete(banner.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Banner' : 'Add New Banner'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Textarea
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="/src/assets/your-image.jpg"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  type="number"
                  min="1"
                  max="3"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  {editingId ? 'Update' : 'Create'} Banner
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};