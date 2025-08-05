import { Helmet } from 'react-helmet-async'
import { personalData } from '@config/personalData'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export const SEO = ({
  title = `${personalData.name} - ${personalData.role}`,
  description = `${personalData.name} - ${personalData.role}. Especialista em React, TypeScript e UX/UI Design. Analista de Desenvolvimento na ${personalData.company}.`,
  keywords = `${personalData.name}, desenvolvedor, full stack, frontend, React, TypeScript, JavaScript, portfolio, São Paulo, ${personalData.company}`,
  image = '/assets/patryck-sans-og.jpg',
  url = 'https://d17a4k0d28eeju.cloudfront.net',
  type = 'website'
}: SEOProps) => {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={personalData.name} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  )
}