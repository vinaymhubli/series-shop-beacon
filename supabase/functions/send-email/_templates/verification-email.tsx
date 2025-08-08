import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface VerificationEmailProps {
  supabase_url: string
  email_action_type: string
  redirect_to: string
  token_hash: string
  token: string
  user_email: string
}

export const VerificationEmail = ({
  token,
  supabase_url,
  email_action_type,
  redirect_to,
  token_hash,
  user_email,
}: VerificationEmailProps) => (
  <Html>
    <Head />
    <Preview>Verify your email with Crossed Hearts</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={logoContainer}>
          <Text style={logo}>💕 Crossed Hearts</Text>
        </div>
        <Heading style={h1}>Welcome to Crossed Hearts!</Heading>
        <Text style={text}>
          Hi there! Thank you for joining our community. We're excited to have you on board.
        </Text>
        <Text style={text}>
          To complete your registration and verify your email address, please click the button below:
        </Text>
        <Link
          href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          target="_blank"
          style={button}
        >
          Verify Email Address 💕
        </Link>
        <Text style={text}>
          Or, copy and paste this verification code if the button doesn't work:
        </Text>
        <code style={code}>{token}</code>
        <Text style={smallText}>
          If you didn't create an account with us, you can safely ignore this email.
        </Text>
        <div style={footer}>
          <Text style={footerText}>
            With love,<br />
            The Crossed Hearts Team 💕
          </Text>
        </div>
      </Container>
    </Body>
  </Html>
)

export default VerificationEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'system-ui, -apple-system, sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
}

const logoContainer = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const logo = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#e11d48',
  margin: '0',
}

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '32px 0',
}

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
}

const button = {
  backgroundColor: '#e11d48',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '20px',
  padding: '14px 28px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  margin: '24px auto',
  width: 'fit-content',
}

const code = {
  backgroundColor: '#f3f4f6',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  color: '#1f2937',
  display: 'block',
  fontFamily: 'monospace',
  fontSize: '14px',
  margin: '16px 0',
  padding: '16px',
  textAlign: 'center' as const,
}

const smallText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '24px 0 16px 0',
}

const footer = {
  borderTop: '1px solid #e5e7eb',
  marginTop: '32px',
  paddingTop: '24px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
}