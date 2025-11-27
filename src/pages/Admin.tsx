import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Settings, 
  Video, 
  FileText, 
  Image as ImageIcon, 
  Share2,
  Save,
  Upload,
  Link as LinkIcon
} from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  
  // Video Links State
  const [videoLinks, setVideoLinks] = useState({
    heroVideo: "",
    aboutVideo: "",
    tutorialVideo: "",
  });

  // Text Content State
  const [textContent, setTextContent] = useState({
    siteTitle: "Asusuigboamaka",
    heroHeadline: "Nnọọ! Welcome to Asusuigboamaka",
    heroSubtitle: "Preserving the beauty and richness of Asụsụ Igbo",
    aboutFounder: "Njideka Austin-Okafor",
    missionStatement: "Our language is more than words—it's our identity, our heritage...",
  });

  // Social Media State
  const [socialMedia, setSocialMedia] = useState({
    email: "asusuigboamakaonline@gmail.com",
    facebook: "https://facebook.com/Asusuigboamakaonline",
    instagram: "https://instagram.com/Asusuigboamaka",
    website: "www.asusuigboamaka.com",
  });

  // Image State
  const [images, setImages] = useState({
    heroImage: "",
    aboutImage: "",
    logoImage: "",
  });

  const handleSave = (section: string) => {
    toast({
      title: "Changes saved!",
      description: `Your ${section} have been updated successfully.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground mt-1">
                  Manage your website content, videos, images, and social media
                </p>
              </div>
            </div>
          </div>

          {/* Tabs for Different Sections */}
          <Tabs defaultValue="videos" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto p-2 bg-card/50">
              <TabsTrigger value="videos" className="flex items-center gap-2 py-3">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Video Links</span>
                <span className="sm:hidden">Videos</span>
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-2 py-3">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Text Content</span>
                <span className="sm:hidden">Text</span>
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center gap-2 py-3">
                <ImageIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Images</span>
                <span className="sm:hidden">Images</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2 py-3">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Social Media</span>
                <span className="sm:hidden">Social</span>
              </TabsTrigger>
            </TabsList>

            {/* Video Links Tab */}
            <TabsContent value="videos">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Manage Video Links
                  </CardTitle>
                  <CardDescription>
                    Update video URLs for hero section, about page, and tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="heroVideo" className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      Hero Video URL
                    </Label>
                    <Input
                      id="heroVideo"
                      value={videoLinks.heroVideo}
                      onChange={(e) => setVideoLinks({ ...videoLinks, heroVideo: e.target.value })}
                      placeholder="https://youtube.com/watch?v=..."
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aboutVideo" className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      About Page Video URL
                    </Label>
                    <Input
                      id="aboutVideo"
                      value={videoLinks.aboutVideo}
                      onChange={(e) => setVideoLinks({ ...videoLinks, aboutVideo: e.target.value })}
                      placeholder="https://youtube.com/watch?v=..."
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tutorialVideo" className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      Tutorial Video URL
                    </Label>
                    <Input
                      id="tutorialVideo"
                      value={videoLinks.tutorialVideo}
                      onChange={(e) => setVideoLinks({ ...videoLinks, tutorialVideo: e.target.value })}
                      placeholder="https://youtube.com/watch?v=..."
                      className="text-base"
                    />
                  </div>

                  <Button 
                    onClick={() => handleSave("video links")} 
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Video Links
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Text Content Tab */}
            <TabsContent value="text">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Manage Text Content
                  </CardTitle>
                  <CardDescription>
                    Edit headlines, descriptions, and other text throughout the site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteTitle">Site Title</Label>
                    <Input
                      id="siteTitle"
                      value={textContent.siteTitle}
                      onChange={(e) => setTextContent({ ...textContent, siteTitle: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heroHeadline">Hero Headline</Label>
                    <Input
                      id="heroHeadline"
                      value={textContent.heroHeadline}
                      onChange={(e) => setTextContent({ ...textContent, heroHeadline: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                    <Input
                      id="heroSubtitle"
                      value={textContent.heroSubtitle}
                      onChange={(e) => setTextContent({ ...textContent, heroSubtitle: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aboutFounder">About - Founder Name</Label>
                    <Input
                      id="aboutFounder"
                      value={textContent.aboutFounder}
                      onChange={(e) => setTextContent({ ...textContent, aboutFounder: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="missionStatement">Mission Statement</Label>
                    <Textarea
                      id="missionStatement"
                      value={textContent.missionStatement}
                      onChange={(e) => setTextContent({ ...textContent, missionStatement: e.target.value })}
                      rows={4}
                      className="text-base"
                    />
                  </div>

                  <Button 
                    onClick={() => handleSave("text content")} 
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Text Content
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Images Tab */}
            <TabsContent value="images">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    Manage Images
                  </CardTitle>
                  <CardDescription>
                    Upload and manage images for hero, about page, and site logo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Hero Image */}
                    <div className="space-y-3">
                      <Label>Hero Image</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag & drop or click to upload
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="heroImageUpload"
                        />
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="heroImageUpload" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                      </div>
                    </div>

                    {/* About Image */}
                    <div className="space-y-3">
                      <Label>About Page Image</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag & drop or click to upload
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="aboutImageUpload"
                        />
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="aboutImageUpload" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                      </div>
                    </div>

                    {/* Logo Image */}
                    <div className="space-y-3">
                      <Label>Site Logo</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag & drop or click to upload
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="logoImageUpload"
                        />
                        <Button variant="outline" size="sm" asChild>
                          <label htmlFor="logoImageUpload" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleSave("images")} 
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Images
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Social Media Tab */}
            <TabsContent value="social">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-primary" />
                    Manage Social Media
                  </CardTitle>
                  <CardDescription>
                    Update social media handles and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={socialMedia.email}
                      onChange={(e) => setSocialMedia({ ...socialMedia, email: e.target.value })}
                      placeholder="your@email.com"
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook URL</Label>
                    <Input
                      id="facebook"
                      value={socialMedia.facebook}
                      onChange={(e) => setSocialMedia({ ...socialMedia, facebook: e.target.value })}
                      placeholder="https://facebook.com/yourpage"
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram URL</Label>
                    <Input
                      id="instagram"
                      value={socialMedia.instagram}
                      onChange={(e) => setSocialMedia({ ...socialMedia, instagram: e.target.value })}
                      placeholder="https://instagram.com/youraccount"
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      value={socialMedia.website}
                      onChange={(e) => setSocialMedia({ ...socialMedia, website: e.target.value })}
                      placeholder="www.yourwebsite.com"
                      className="text-base"
                    />
                  </div>

                  <Button 
                    onClick={() => handleSave("social media links")} 
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Social Media
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-primary/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Total Images</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-secondary/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Video Links</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-accent/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">4</div>
                  <p className="text-sm text-muted-foreground">Social Accounts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
