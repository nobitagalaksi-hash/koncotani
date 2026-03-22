import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  CloudRain, 
  Droplets, 
  Wind, 
  Sun, 
  Thermometer,
  Sprout,
  Leaf,
  FlaskConical,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { motion } from "motion/react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export function Dashboard() {
  const [landData, setLandData] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('landData');
    if (stored) {
      setLandData(JSON.parse(stored));
    }
  }, []);

  // Mock weather data
  const weatherData = [
    { day: 'Sen', temp: 28, humidity: 75, rain: 5 },
    { day: 'Sel', temp: 29, humidity: 78, rain: 10 },
    { day: 'Rab', temp: 27, humidity: 82, rain: 25 },
    { day: 'Kam', temp: 26, humidity: 85, rain: 40 },
    { day: 'Jum', temp: 27, humidity: 80, rain: 15 },
    { day: 'Sab', temp: 28, humidity: 76, rain: 8 },
    { day: 'Min', temp: 30, humidity: 72, rain: 3 },
  ];

  // Mock soil moisture data
  const soilMoistureData = [
    { time: '00:00', moisture: 65 },
    { time: '04:00', moisture: 68 },
    { time: '08:00', moisture: 62 },
    { time: '12:00', moisture: 58 },
    { time: '16:00', moisture: 55 },
    { time: '20:00', moisture: 60 },
    { time: '23:59', moisture: 64 },
  ];

  // Mock crop recommendations
  const cropRecommendations = [
    { 
      name: 'Padi', 
      score: 95, 
      reason: 'Sangat sesuai dengan kondisi tanah alluvial dan ketinggian lahan',
      season: 'Musim Hujan',
      duration: '110-120 hari'
    },
    { 
      name: 'Jagung', 
      score: 88, 
      reason: 'Cocok untuk rotasi tanaman dengan pola tanam yang ada',
      season: 'Musim Kemarau',
      duration: '90-100 hari'
    },
    { 
      name: 'Kedelai', 
      score: 82, 
      reason: 'Baik untuk memperbaiki kesuburan tanah dan diversifikasi',
      season: 'Musim Kemarau',
      duration: '75-85 hari'
    },
    { 
      name: 'Kacang Tanah', 
      score: 78, 
      reason: 'Alternatif tanaman palawija dengan nilai ekonomi tinggi',
      season: 'Musim Kemarau',
      duration: '90-100 hari'
    },
  ];

  // Mock fertilizer recommendations
  const fertilizerRecommendations = [
    {
      type: 'Urea',
      amount: '200-250 kg/ha',
      timing: 'Aplikasi bertahap: 50% saat tanam, 25% umur 21 hari, 25% umur 42 hari',
      purpose: 'Sumber nitrogen untuk pertumbuhan vegetatif'
    },
    {
      type: 'SP-36',
      amount: '100-150 kg/ha',
      timing: 'Seluruh dosis saat pengolahan tanah atau saat tanam',
      purpose: 'Sumber fosfor untuk pembentukan akar dan bunga'
    },
    {
      type: 'KCl',
      amount: '75-100 kg/ha',
      timing: 'Seluruh dosis saat tanam',
      purpose: 'Sumber kalium untuk kualitas hasil panen'
    },
    {
      type: 'Pupuk Organik',
      amount: '2-3 ton/ha',
      timing: '2 minggu sebelum tanam',
      purpose: 'Memperbaiki struktur tanah dan ketersediaan hara'
    },
  ];

  // Soil suitability radar
  const soilSuitability = [
    { factor: 'pH Tanah', value: 85 },
    { factor: 'Drainase', value: 90 },
    { factor: 'Kesuburan', value: 75 },
    { factor: 'Tekstur', value: 88 },
    { factor: 'Ketinggian', value: 92 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">
            Dashboard Analisis Lahan
          </h1>
          {landData && (
            <p className="text-lg text-green-700">
              Lokasi: {landData.location} • {landData.province} • {landData.landArea} ha
            </p>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 mb-1">Suhu Rata-rata</p>
                  <p className="text-3xl font-bold text-blue-900">28°C</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Thermometer className="size-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-teal-700 mb-1">Kelembaban Tanah</p>
                  <p className="text-3xl font-bold text-teal-900">65%</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Droplets className="size-6 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-700 mb-1">Probabilitas Hujan</p>
                  <p className="text-3xl font-bold text-amber-900">40%</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <CloudRain className="size-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-lime-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 mb-1">Kesesuaian Lahan</p>
                  <p className="text-3xl font-bold text-green-900">Tinggi</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="size-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="weather" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-green-100">
            <TabsTrigger value="weather">
              <CloudRain className="size-4 mr-2" />
              <span className="hidden sm:inline">Cuaca</span>
            </TabsTrigger>
            <TabsTrigger value="soil">
              <Droplets className="size-4 mr-2" />
              <span className="hidden sm:inline">Tanah</span>
            </TabsTrigger>
            <TabsTrigger value="crops">
              <Sprout className="size-4 mr-2" />
              <span className="hidden sm:inline">Tanaman</span>
            </TabsTrigger>
            <TabsTrigger value="fertilizer">
              <FlaskConical className="size-4 mr-2" />
              <span className="hidden sm:inline">Pupuk</span>
            </TabsTrigger>
            <TabsTrigger value="care">
              <Leaf className="size-4 mr-2" />
              <span className="hidden sm:inline">Perawatan</span>
            </TabsTrigger>
          </TabsList>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudRain className="size-5 text-blue-600" />
                  Prediksi Cuaca 7 Hari
                </CardTitle>
                <CardDescription>
                  Data prediksi cuaca untuk perencanaan kegiatan pertanian
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} name="Suhu (°C)" />
                    <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#0ea5e9" strokeWidth={2} name="Kelembaban (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudRain className="size-5 text-blue-600" />
                  Probabilitas Curah Hujan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rain" fill="#3b82f6" name="Curah Hujan (mm)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900">Rekomendasi Berdasarkan Cuaca</AlertTitle>
              <AlertDescription className="text-blue-800">
                Prediksi hujan sedang pada hari Kamis (40mm). Pertimbangkan untuk menunda pemupukan hingga kondisi cuaca membaik untuk efektivitas maksimal.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Soil Tab */}
          <TabsContent value="soil" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="size-5 text-teal-600" />
                    Monitoring Kelembaban Tanah
                  </CardTitle>
                  <CardDescription>
                    Data kelembaban tanah dalam 24 jam terakhir
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={soilMoistureData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="moisture" stroke="#14b8a6" strokeWidth={2} name="Kelembaban (%)" />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                    <p className="text-sm text-teal-900">
                      <strong>Status:</strong> Kelembaban optimal untuk pertumbuhan tanaman
                    </p>
                    <p className="text-sm text-teal-700 mt-1">
                      Kisaran ideal: 60-70% • Saat ini: 65%
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="size-5 text-green-600" />
                    Kesesuaian Lahan
                  </CardTitle>
                  <CardDescription>
                    Analisis faktor-faktor kesesuaian lahan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <RadarChart data={soilSuitability}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="factor" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar name="Skor Kesesuaian" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-900">
                      <strong>Kesimpulan:</strong> Lahan sangat sesuai untuk budidaya tanaman pangan
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Karakteristik Tanah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-700 mb-1">Jenis Tanah</p>
                    <p className="text-lg font-semibold text-amber-900">{landData?.soilType || 'Alluvial'}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 mb-1">pH Tanah</p>
                    <p className="text-lg font-semibold text-blue-900">6.5 (Optimal)</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 mb-1">Tekstur</p>
                    <p className="text-lg font-semibold text-green-900">Lempung Berpasir</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Crops Tab */}
          <TabsContent value="crops" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="size-5 text-green-600" />
                  Rekomendasi Jenis Tanaman
                </CardTitle>
                <CardDescription>
                  Tanaman yang paling sesuai dengan kondisi lahan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cropRecommendations.map((crop, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Sprout className="size-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-green-900">{crop.name}</h3>
                            <p className="text-sm text-green-700">{crop.season} • {crop.duration}</p>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white px-3 py-1">
                          Skor: {crop.score}%
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 ml-13">{crop.reason}</p>
                      <div className="mt-2 ml-13">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full transition-all" 
                            style={{ width: `${crop.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900">Rekomendasi Waktu Tanam</AlertTitle>
              <AlertDescription className="text-green-800">
                Berdasarkan analisis cuaca dan kondisi tanah, waktu optimal untuk memulai penanaman padi adalah dalam 2-3 minggu ke depan, setelah periode hujan stabilĐang berlalu.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Fertilizer Tab */}
          <TabsContent value="fertilizer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical className="size-5 text-purple-600" />
                  Rekomendasi Jenis Pupuk
                </CardTitle>
                <CardDescription>
                  Panduan pemupukan untuk hasil optimal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fertilizerRecommendations.map((fertilizer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 border rounded-lg bg-gradient-to-r from-white to-purple-50"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <FlaskConical className="size-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-purple-900 mb-1">{fertilizer.type}</h3>
                          <p className="text-sm text-purple-700 mb-2">
                            <strong>Dosis:</strong> {fertilizer.amount}
                          </p>
                        </div>
                      </div>
                      <div className="ml-13 space-y-2">
                        <div className="p-3 bg-white rounded border border-purple-100">
                          <p className="text-sm text-gray-700">
                            <strong className="text-purple-900">Waktu Aplikasi:</strong><br />
                            {fertilizer.timing}
                          </p>
                        </div>
                        <div className="p-3 bg-white rounded border border-purple-100">
                          <p className="text-sm text-gray-700">
                            <strong className="text-purple-900">Fungsi:</strong><br />
                            {fertilizer.purpose}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-900">Catatan Penting</AlertTitle>
              <AlertDescription className="text-amber-800">
                Sesuaikan dosis pupuk berdasarkan hasil uji tanah untuk efisiensi maksimal. Aplikasi pupuk sebaiknya dilakukan pada pagi atau sore hari untuk menghindari penguapan.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Care Tab */}
          <TabsContent value="care" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="size-5 text-green-600" />
                  Panduan Perawatan Tanaman
                </CardTitle>
                <CardDescription>
                  Praktik budidaya terbaik untuk tanaman Padi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Planting */}
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-lg text-green-900 mb-2 flex items-center gap-2">
                      <Calendar className="size-5" />
                      Tahap Penanaman
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Pengolahan tanah: Bajak 2 kali dengan interval 7-10 hari</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Pembuatan bedengan dengan lebar 100-120 cm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Jarak tanam: 25 x 25 cm atau sistem jajar legowo 2:1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Tanam bibit umur 21-25 hari, 2-3 bibit per lubang</span>
                      </li>
                    </ul>
                  </div>

                  {/* Irrigation */}
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-lg text-blue-900 mb-2 flex items-center gap-2">
                      <Droplets className="size-5" />
                      Pengairan
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>0-10 hari: Genangan air 2-3 cm untuk perakaran optimal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>11-40 hari: Tinggi genangan 5 cm (fase vegetatif)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>41-70 hari: Genangan 7-10 cm (fase generatif)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>10 hari sebelum panen: Pengeringan bertahap</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pest Control */}
                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-semibold text-lg text-red-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="size-5" />
                      Pengendalian Hama & Penyakit
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Monitoring rutin setiap 3-4 hari untuk deteksi dini</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Gunakan perangkap hama dan musuh alami sebagai prioritas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Aplikasi pestisida hanya jika ambang ekonomi terlampaui</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Perhatikan periode karantina sebelum panen</span>
                      </li>
                    </ul>
                  </div>

                  {/* Harvesting */}
                  <div className="border-l-4 border-amber-600 pl-4">
                    <h3 className="font-semibold text-lg text-amber-900 mb-2 flex items-center gap-2">
                      <Sun className="size-5" />
                      Panen & Pasca Panen
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Panen saat 90% gabah sudah menguning (kadar air 22-26%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Lakukan panen pada pagi hari untuk kualitas optimal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Jemur gabah hingga kadar air 14% untuk penyimpanan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Simpan di tempat kering dan terhindar dari hama gudang</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-green-50 border-green-200">
              <Leaf className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900">Tips Produktivitas</AlertTitle>
              <AlertDescription className="text-green-800">
                Penerapan sistem jajar legowo dapat meningkatkan populasi tanaman hingga 25% dan memudahkan perawatan. Kombinasikan dengan pemupukan berimbang untuk hasil maksimal.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
