import { Link } from "react-router";
import { CloudRain, Sprout, Leaf, Droplets, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function Home() {
  const features = [
    {
      icon: CloudRain,
      title: "Weather Prediction",
      description: "Prediksi cuaca akurat untuk perencanaan waktu tanam yang optimal",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Droplets,
      title: "Analisis Kelembaban Tanah",
      description: "Monitoring kondisi kelembaban tanah real-time untuk irigasi tepat",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Sprout,
      title: "Rekomendasi Tanaman",
      description: "Saran jenis tanaman sesuai kondisi iklim dan kesesuaian lahan",
      color: "from-green-500 to-lime-500"
    },
    {
      icon: Leaf,
      title: "Panduan Perawatan",
      description: "Teknik budidaya, pemupukan, dan pengelolaan lahan berkelanjutan",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const benefits = [
    "Meningkatkan produktivitas hasil panen hingga 40%",
    "Mengurangi risiko gagal panen dengan data prediktif",
    "Efisiensi penggunaan pupuk dan air irigasi",
    "Keputusan berbasis data ilmiah dan akurat",
    "Konsultasi AI 24/7 untuk solusi pertanian"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 opacity-90"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1645157204381-802ead8e50a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcmljZSUyMGZpZWxkJTIwZmFybWVyfGVufDF8fHx8MTc3NDE3NTc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Farmer in rice field"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              Platform Pertanian Presisi Berbasis AI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              KONCO TANI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Knowledge-Based Weather and Soil Decision System
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Platform digital pertanian presisi yang memanfaatkan analisis data cuaca dan kesesuaian lahan untuk memberikan rekomendasi waktu tanam, jenis pupuk, dan tanaman yang optimal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/analisis">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 shadow-lg">
                  Mulai Analisis Lahan
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link to="/konsultasi">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <MessageSquare className="mr-2 size-5" />
                  AgroConsult AI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Fitur Unggulan KONCO TANI
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Teknologi canggih untuk membantu petani dalam pengambilan keputusan pertanian yang lebih tepat dan efisien
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="size-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-green-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Cara Kerja Sistem
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Proses sederhana untuk mendapatkan rekomendasi pertanian berbasis data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Input Data Lahan",
                description: "Masukkan informasi lokasi dan kondisi lahan pertanian Anda"
              },
              {
                step: "2",
                title: "Analisis Sistem",
                description: "Sistem menganalisis data cuaca, tanah, dan agronomi tanaman"
              },
              {
                step: "3",
                title: "Rekomendasi",
                description: "Dapatkan saran tanaman, pupuk, dan panduan perawatan optimal"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl text-green-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-green-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              Manfaat KONCO TANI untuk Petani Indonesia
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800">{benefit}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/analisis">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Coba Sekarang Gratis
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5JTIwZGF0YXxlbnwxfHx8fDE3NzQxNzU4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agricultural technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Meningkatkan Produktivitas Pertanian Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan petani yang telah merasakan manfaat teknologi pertanian presisi
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/analisis">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  Mulai Analisis Sekarang
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link to="/konsultasi">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <MessageSquare className="mr-2 size-5" />
                  Konsultasi dengan AI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
