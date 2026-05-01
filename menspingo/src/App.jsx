import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { BlogPage } from './pages/BlogPage.jsx'
import { BlogPostPage } from './pages/BlogPostPage.jsx'
import { CareersPage } from './pages/CareersPage.jsx'
import { CaseStudyPage } from './pages/CaseStudyPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { IndustriesPage } from './pages/IndustriesPage.jsx'
import { InternshipPage } from './pages/InternshipPage.jsx'
import { PortfolioPage } from './pages/PortfolioPage.jsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.jsx'
import { ServiceDetailPage } from './pages/ServiceDetailPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { TermsPage } from './pages/TermsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        {/* <Route path="/industries" element={<IndustriesPage />} /> */}
        {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
        {/* <Route path="/internship" element={<InternshipPage />} /> */}
        {/* <Route path="/careers" element={<CareersPage />} /> */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
