import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Send, Bot, User, Sparkles, Leaf, Bug, Droplets, Sprout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AgroConsult() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Selamat datang di AgroConsult AI! 🌾 Saya adalah asisten digital pertanian Anda. Silakan tanyakan apa saja tentang budidaya tanaman, perawatan lahan, hama penyakit, atau strategi pertanian lainnya.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sample questions
  const sampleQuestions = [
    { icon: Sprout, text: "Kapan waktu terbaik menanam padi?", category: "Penanaman" },
    { icon: Bug, text: "Bagaimana cara mengatasi hama wereng?", category: "Hama" },
    { icon: Droplets, text: "Berapa kebutuhan air untuk tanaman jagung?", category: "Irigasi" },
    { icon: Leaf, text: "Pupuk apa yang baik untuk cabai?", category: "Pemupukan" },
  ];

  // Mock AI responses based on keywords
  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('padi') || lowerQuestion.includes('tanam')) {
      return `Waktu terbaik untuk menanam padi tergantung pada musim dan ketersediaan air:

**Musim Hujan (Oktober-Maret):**
- Ideal untuk varietas padi yang membutuhkan banyak air
- Penanaman dimulai saat hujan mulai teratur
- Pastikan drainase baik untuk mencegah genangan berlebih

**Musim Kemarau (April-September):**
- Memerlukan sistem irigasi yang baik
- Cocok untuk padi varietas gogo atau padi sawah dengan irigasi teknis
- Pemupukan lebih efisien karena tidak tercuci hujan

**Persiapan:**
1. Olah tanah 2-3 minggu sebelum tanam
2. Pastikan pH tanah 5.5-6.5
3. Gunakan benih bersertifikat
4. Lakukan persemaian 21-25 hari sebelum pindah tanam

Apakah ada aspek spesifik tentang penanaman padi yang ingin Anda tanyakan?`;
    }

    if (lowerQuestion.includes('wereng') || lowerQuestion.includes('hama')) {
      return `Pengendalian hama wereng memerlukan pendekatan terpadu (PHT):

**Pencegahan:**
- Gunakan varietas tahan wereng (seperti Inpari 32, Inpari 42)
- Tanam serempak dengan tetangga (dalam radius 2 minggu)
- Bersihkan rumput dan gulma di sekitar sawah
- Jaga keseimbangan pupuk N (jangan berlebihan)

**Pengendalian Biologis:**
- Lestarikan musuh alami: laba-laba, kepik, capung
- Hindari penggunaan insektisida broad-spectrum
- Pasang lampu perangkap pada malam hari

**Pengendalian Kimia (jika perlu):**
- Gunakan hanya jika populasi >5 ekor/rumpun
- Aplikasi insektisida sesuai anjuran (Imidakloprid, Buprofezin)
- Rotasi bahan aktif untuk mencegah resistensi
- Semprot pada pagi/sore hari

**Monitoring:** Periksa tanaman setiap 3-4 hari untuk deteksi dini.

Ada yang ingin ditanyakan lebih lanjut tentang pengendalian hama?`;
    }

    if (lowerQuestion.includes('jagung') || lowerQuestion.includes('air') || lowerQuestion.includes('irigasi')) {
      return `Kebutuhan air tanaman jagung bervariasi sesuai fase pertumbuhan:

**Total Kebutuhan Air:** 400-600 mm selama siklus hidup

**Per Fase Pertumbuhan:**

1. **Fase Vegetatif (0-45 hari):**
   - 3-4 mm/hari
   - Penyiraman 2-3 kali seminggu
   - Jaga kelembaban tanah 60-70%

2. **Fase Pembungaan (45-65 hari):**
   - 5-6 mm/hari (fase kritis!)
   - Penyiraman lebih sering
   - Kekurangan air → tongkol tidak penuh

3. **Fase Pengisian Biji (65-90 hari):**
   - 4-5 mm/hari
   - Pastikan tidak kekeringan
   - Kualitas biji sangat terpengaruh

4. **Fase Pematangan (90-110 hari):**
   - 2-3 mm/hari
   - Kurangi air secara bertahap
   - 10 hari sebelum panen: stop irigasi

**Tips Efisiensi Air:**
- Gunakan mulsa organik untuk mengurangi evaporasi
- Irigasi tetes lebih efisien dari irigasi genangan
- Waktu terbaik: pagi (6-8) atau sore (16-18)

Butuh informasi lebih detail tentang sistem irigasi tertentu?`;
    }

    if (lowerQuestion.includes('cabai') || lowerQuestion.includes('pupuk')) {
      return `Pemupukan cabai yang tepat sangat penting untuk hasil optimal:

**Pupuk Dasar (saat pengolahan tanah):**
- Pupuk kandang/kompos: 10-20 ton/ha
- SP-36: 200-300 kg/ha
- KCl: 100-150 kg/ha

**Pupuk Susulan (aplikasi bertahap):**

**Umur 2 minggu:**
- Urea: 50 kg/ha
- NPK: 100 kg/ha

**Umur 4 minggu:**
- Urea: 75 kg/ha
- KCl: 50 kg/ha

**Umur 6 minggu dan seterusnya (setiap 2 minggu):**
- Urea: 50 kg/ha
- KCl: 50 kg/ha
- NPK: 100 kg/ha

**Pupuk Mikro (foliar spray):**
- Aplikasi setiap 10-14 hari
- Mengandung Ca, Mg, B, Zn
- Waktu semprot: pagi/sore

**Tips Penting:**
1. Sesuaikan dosis dengan hasil uji tanah
2. Aplikasi saat tanah lembab, bukan becek
3. Jarak pupuk 10-15 cm dari batang
4. Tambahkan pupuk organik cair setiap 2 minggu

**Tanda Kekurangan:**
- Daun kuning → kekurangan N
- Daun ungu → kekurangan P
- Tepi daun kering → kekurangan K

Ada pertanyaan tentang pemupukan di fase tertentu?`;
    }

    // Default response
    return `Terima kasih atas pertanyaan Anda! 

Sebagai AI konsultan pertanian, saya dapat membantu Anda dengan berbagai topik:

🌱 **Budidaya Tanaman** - Panduan menanam berbagai komoditas
🐛 **Hama & Penyakit** - Identifikasi dan pengendalian
💧 **Irigasi & Pengairan** - Manajemen air yang efisien
🌾 **Pemupukan** - Rekomendasi nutrisi tanaman
🌍 **Pengelolaan Lahan** - Praktik pertanian berkelanjutan
📅 **Jadwal Tanam** - Waktu optimal berdasarkan musim

Silakan tanyakan pertanyaan spesifik Anda, dan saya akan memberikan informasi yang detail dan praktis!

*Catatan: Untuk implementasi penuh, AgroConsult AI akan terhubung dengan model AI pertanian yang telah dilatih dengan data agronomi Indonesia.*`;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(inputMessage),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSampleQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <Sparkles className="size-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-green-900">
                AgroConsult AI
              </h1>
              <p className="text-green-700">Asisten Pertanian Cerdas Berbasis AI</p>
            </div>
          </div>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Konsultasi 24/7 tentang budidaya, hama, pemupukan, dan strategi pertanian
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="size-5 text-green-600" />
                    <CardTitle className="text-green-900">Konsultasi Pertanian</CardTitle>
                  </div>
                  <Badge className="bg-green-600 text-white">
                    <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                    Online
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-green-50/30">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`flex gap-3 ${
                          message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        {/* Avatar */}
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === 'user'
                              ? 'bg-blue-600'
                              : 'bg-gradient-to-br from-purple-600 to-pink-600'
                          }`}
                        >
                          {message.role === 'user' ? (
                            <User className="size-5 text-white" />
                          ) : (
                            <Bot className="size-5 text-white" />
                          )}
                        </div>

                        {/* Message */}
                        <div
                          className={`flex-1 max-w-[80%] ${
                            message.role === 'user' ? 'text-right' : 'text-left'
                          }`}
                        >
                          <div
                            className={`inline-block px-4 py-3 rounded-2xl ${
                              message.role === 'user'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-green-200 text-gray-800 shadow-sm'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap leading-relaxed">
                              {message.content}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 px-2">
                            {message.timestamp.toLocaleTimeString('id-ID', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <Bot className="size-5 text-white" />
                      </div>
                      <div className="bg-white border border-green-200 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t bg-white">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ketik pertanyaan pertanian Anda..."
                      className="flex-1 border-green-200 focus:border-green-400"
                    />
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                      disabled={!inputMessage.trim() || isTyping}
                    >
                      <Send className="size-5" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sample Questions */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg">Pertanyaan Populer</CardTitle>
                <CardDescription>Klik untuk bertanya</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {sampleQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSampleQuestion(question.text)}
                    className="w-full text-left p-3 rounded-lg border border-green-200 hover:bg-green-50 hover:border-green-400 transition-all group"
                  >
                    <div className="flex items-start gap-2">
                      <question.icon className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 group-hover:text-green-900">
                          {question.text}
                        </p>
                        <Badge variant="outline" className="mt-1 text-xs border-green-300 text-green-700">
                          {question.category}
                        </Badge>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="size-5 text-purple-600" />
                  Tentang AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">
                  AgroConsult AI adalah asisten digital yang memberikan konsultasi pertanian berdasarkan pengetahuan agronomi terkini.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2Icon className="size-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Jawaban berbasis data ilmiah</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2Icon className="size-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Disesuaikan kondisi Indonesia</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2Icon className="size-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Tersedia 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  💡 Tips Bertanya
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-gray-700">
                <p>✓ Sebutkan jenis tanaman secara spesifik</p>
                <p>✓ Jelaskan kondisi lahan Anda</p>
                <p>✓ Sertakan gejala jika ada masalah</p>
                <p>✓ Tanyakan satu topik per pertanyaan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
