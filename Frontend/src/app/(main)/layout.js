import Footer from "@/components/sections/Footer"
import Navbar from "@/components/sections/Navbar"
import Providers from "@/components/ThemeProvider"
import AnnouncementBar from "@/components/sections/AnnouncementBar"

export default function MainLayout({ children }) {
    return (
        <Providers>
            <AnnouncementBar />
            <Navbar />
            {children}
            <Footer />
        </Providers>
    )
}