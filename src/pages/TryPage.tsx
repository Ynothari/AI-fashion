
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { outfitCategories, primaryOutfits, additionalOutfits } from "@/data/outfitData";
import { useToast } from "@/components/ui/use-toast";

const TryPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Casual");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setShowResults(false);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const analyzeImage = () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please upload an image to get outfit recommendations.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    
    // Check if user is logged in
    const currentUser = localStorage.getItem("currentUser");
    const isLoggedIn = !!currentUser;
    
    console.log("Connecting to MongoDB...");
    console.log("Analyzing image for outfit recommendations...");
    console.log("User logged in status:", isLoggedIn);
    
    // Simulate API call to MongoDB and AI model
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      
      if (isLoggedIn) {
        console.log("Saving outfit request to user history in MongoDB...");
        // In a real app, we would save this data to MongoDB
      }
      
      toast({
        title: "Analysis complete",
        description: "We've generated personalized outfit recommendations for you!",
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Try Our AI Outfit Recommendations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Photo</CardTitle>
              <CardDescription>
                Upload a photo of yourself to get personalized outfit recommendations.
                We don't store your photos and they're only used for generating recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div 
                  className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center ${
                    previewUrl ? "border-indigo-300" : "border-gray-300 hover:border-indigo-300"
                  } transition-colors cursor-pointer`}
                  onClick={triggerFileInput}
                  style={{ minHeight: "300px" }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-60 object-contain"
                    />
                  ) : (
                    <>
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500">Click to upload your image or drag and drop</p>
                      <p className="text-gray-400 text-sm mt-2">PNG, JPG or JPEG (max 10MB)</p>
                    </>
                  )}
                </div>
                
                <Button 
                  onClick={analyzeImage} 
                  disabled={!selectedFile || isAnalyzing} 
                  className="w-full"
                >
                  {isAnalyzing ? "Analyzing Your Photo..." : "Get Outfit Recommendations"}
                </Button>
                
                {previewUrl && (
                  <p className="text-sm text-gray-500 text-center">
                    Note: We don't create a virtual try-on. Our AI will analyze your photo and 
                    provide recommendations based on your appearance.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Outfit Recommendations</CardTitle>
              <CardDescription>
                Personalized male outfit suggestions based on your photo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showResults ? (
                <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
                  <TabsList className="grid grid-cols-3 mb-6">
                    {outfitCategories.slice(0, 3).map((category) => (
                      <TabsTrigger key={category} value={category}>
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsList className="grid grid-cols-3 mb-6">
                    {outfitCategories.slice(3, 6).map((category) => (
                      <TabsTrigger key={category} value={category}>
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {outfitCategories.map((category) => (
                    <TabsContent key={category} value={category} className="space-y-6">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={primaryOutfits[category as keyof typeof primaryOutfits].imageUrl} 
                          alt={`${category} outfit`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{category} Look</h3>
                        <p className="text-gray-600 mb-4">
                          {primaryOutfits[category as keyof typeof primaryOutfits].description}
                        </p>
                        
                        <h4 className="font-medium mb-2">Recommended Items:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {primaryOutfits[category as keyof typeof primaryOutfits].items.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Display additional outfit recommendations if available */}
                      {additionalOutfits[category as keyof typeof additionalOutfits] && (
                        <div className="mt-8">
                          <h3 className="text-lg font-semibold mb-4">More {category} Recommendations</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {additionalOutfits[category as keyof typeof additionalOutfits].map((outfit, index) => (
                              <Card key={index} className="overflow-hidden">
                                <div className="h-40 overflow-hidden">
                                  <img 
                                    src={outfit.imageUrl} 
                                    alt={outfit.name}
                                    className="w-full h-full object-cover" 
                                  />
                                </div>
                                <CardContent className="p-4">
                                  <h4 className="font-medium text-base">{outfit.name}</h4>
                                  <p className="text-sm text-gray-600 mt-1 mb-2">{outfit.description}</p>
                                  <ul className="text-xs list-disc pl-4 space-y-1">
                                    {outfit.items.slice(0, 2).map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                    {outfit.items.length > 2 && <li>+{outfit.items.length - 2} more items</li>}
                                  </ul>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                <div className="text-center py-20">
                  <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No recommendations yet</h3>
                  <p className="mt-2 text-gray-500">Upload a photo and click "Get Outfit Recommendations" to see personalized suggestions.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TryPage;
