
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";

// Define outfit categories
const outfitCategories = [
  "Casual",
  "Party",
  "Business",
  "Summer",
  "Winter",
  "Sportswear"
];

// Mock outfit recommendations
const mockOutfits = {
  Casual: {
    description: "A relaxed yet stylish look perfect for everyday wear.",
    items: [
      "Light blue button-down oxford shirt",
      "Dark wash slim fit jeans",
      "Brown leather sneakers",
      "Minimalist watch with brown leather strap"
    ],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  Party: {
    description: "An elegant outfit that stands out for evening events.",
    items: [
      "Black fitted dress shirt",
      "Charcoal slim fit trousers",
      "Black leather derby shoes",
      "Minimalist silver watch"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  Business: {
    description: "Professional attire that conveys confidence and competence.",
    items: [
      "Navy blue blazer",
      "Light blue dress shirt",
      "Gray wool trousers",
      "Black cap-toe oxford shoes",
      "Burgundy tie with subtle pattern"
    ],
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  Summer: {
    description: "Light, breathable fabrics to keep you cool and stylish.",
    items: [
      "White linen shirt",
      "Light beige chino shorts",
      "Brown leather sandals",
      "Straw hat with navy band"
    ],
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  Winter: {
    description: "Warm, layered outfit for cold weather without sacrificing style.",
    items: [
      "Charcoal wool overcoat",
      "Burgundy cable-knit sweater",
      "Dark wash jeans",
      "Brown leather boots",
      "Gray wool scarf"
    ],
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  Sportswear: {
    description: "Performance-focused attire for active lifestyles.",
    items: [
      "Black moisture-wicking t-shirt",
      "Navy running shorts with compression liner",
      "Athletic performance sneakers",
      "Sports watch with heart rate monitor"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
};

const TryPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Casual");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
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
                Personalized outfit suggestions based on your photo.
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
                          src={mockOutfits[category as keyof typeof mockOutfits].imageUrl} 
                          alt={`${category} outfit`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{category} Look</h3>
                        <p className="text-gray-600 mb-4">
                          {mockOutfits[category as keyof typeof mockOutfits].description}
                        </p>
                        
                        <h4 className="font-medium mb-2">Recommended Items:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {mockOutfits[category as keyof typeof mockOutfits].items.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
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
