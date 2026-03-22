import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MapPin, Thermometer, Droplets, Mountain, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function LandAnalysis() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    province: "",
    soilType: "",
    landArea: "",
    altitude: "",
    currentCrop: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage for dashboard
    sessionStorage.setItem('landData', JSON.stringify(formData));
    navigate('/dashboard');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
            Analisis Kondisi Lahan
          </h1>
          <p className="text-lg text-green-700">
            Masukkan informasi lahan untuk mendapatkan rekomendasi pertanian yang akurat
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-green-900">Informasi Lahan Pertanian</CardTitle>
            <CardDescription>
              Lengkapi data berikut untuk analisis yang lebih akurat
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="size-4 text-green-600" />
                  Lokasi Lahan
                </Label>
                <Input
                  id="location"
                  placeholder="Contoh: Desa Sukamaju, Kecamatan Cianjur"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  required
                  className="border-green-200 focus:border-green-400"
                />
              </div>

              {/* Province */}
              <div className="space-y-2">
                <Label htmlFor="province">Provinsi</Label>
                <Select value={formData.province} onValueChange={(value) => handleChange('province', value)} required>
                  <SelectTrigger className="border-green-200 focus:border-green-400">
                    <SelectValue placeholder="Pilih provinsi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jawa-barat">Jawa Barat</SelectItem>
                    <SelectItem value="jawa-tengah">Jawa Tengah</SelectItem>
                    <SelectItem value="jawa-timur">Jawa Timur</SelectItem>
                    <SelectItem value="sumatra-utara">Sumatra Utara</SelectItem>
                    <SelectItem value="sulawesi-selatan">Sulawesi Selatan</SelectItem>
                    <SelectItem value="bali">Bali</SelectItem>
                    <SelectItem value="nusa-tenggara-barat">Nusa Tenggara Barat</SelectItem>
                    <SelectItem value="lampung">Lampung</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Soil Type */}
              <div className="space-y-2">
                <Label htmlFor="soilType" className="flex items-center gap-2">
                  <Droplets className="size-4 text-green-600" />
                  Jenis Tanah
                </Label>
                <Select value={formData.soilType} onValueChange={(value) => handleChange('soilType', value)} required>
                  <SelectTrigger className="border-green-200 focus:border-green-400">
                    <SelectValue placeholder="Pilih jenis tanah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alluvial">Alluvial (Tanah Endapan)</SelectItem>
                    <SelectItem value="latosol">Latosol (Tanah Merah)</SelectItem>
                    <SelectItem value="andosol">Andosol (Tanah Vulkanik)</SelectItem>
                    <SelectItem value="podsolik">Podsolik</SelectItem>
                    <SelectItem value="regosol">Regosol</SelectItem>
                    <SelectItem value="grumusol">Grumusol (Tanah Liat)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Land Area */}
              <div className="space-y-2">
                <Label htmlFor="landArea">Luas Lahan (Hektar)</Label>
                <Input
                  id="landArea"
                  type="number"
                  step="0.1"
                  placeholder="Contoh: 2.5"
                  value={formData.landArea}
                  onChange={(e) => handleChange('landArea', e.target.value)}
                  required
                  className="border-green-200 focus:border-green-400"
                />
              </div>

              {/* Altitude */}
              <div className="space-y-2">
                <Label htmlFor="altitude" className="flex items-center gap-2">
                  <Mountain className="size-4 text-green-600" />
                  Ketinggian (mdpl)
                </Label>
                <Select value={formData.altitude} onValueChange={(value) => handleChange('altitude', value)} required>
                  <SelectTrigger className="border-green-200 focus:border-green-400">
                    <SelectValue placeholder="Pilih ketinggian lahan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500">Dataran Rendah (0-500 mdpl)</SelectItem>
                    <SelectItem value="500-1000">Dataran Sedang (500-1000 mdpl)</SelectItem>
                    <SelectItem value="1000-1500">Dataran Tinggi (1000-1500 mdpl)</SelectItem>
                    <SelectItem value="1500+">Pegunungan (&gt;1500 mdpl)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Current Crop */}
              <div className="space-y-2">
                <Label htmlFor="currentCrop" className="flex items-center gap-2">
                  <Thermometer className="size-4 text-green-600" />
                  Tanaman Saat Ini (Opsional)
                </Label>
                <Input
                  id="currentCrop"
                  placeholder="Contoh: Padi, Jagung, Cabai"
                  value={formData.currentCrop}
                  onChange={(e) => handleChange('currentCrop', e.target.value)}
                  className="border-green-200 focus:border-green-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                  size="lg"
                >
                  Analisis Lahan Sekarang
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Droplets className="size-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-1">Data Cuaca</h3>
                <p className="text-sm text-blue-700">Prediksi 7 hari ke depan</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <Mountain className="size-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-900 mb-1">Analisis Tanah</h3>
                <p className="text-sm text-green-700">Kesesuaian lahan detail</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <Thermometer className="size-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-1">Rekomendasi</h3>
                <p className="text-sm text-amber-700">Tanaman & pupuk optimal</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}