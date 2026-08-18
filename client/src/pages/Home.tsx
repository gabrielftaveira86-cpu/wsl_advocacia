import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { 
  Scale, 
  ShieldAlert, 
  FileText, 
  Users, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Clock, 
  Laptop, 
  Building2, 
  ChevronRight, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink,
  HelpCircle,
  Award,
  Sparkles,
  Shield
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp helper
  const WHATSAPP_NUMBER = "5511980207406";
  const openWhatsApp = (customMessage?: string) => {
    const text = customMessage || "Olá, gostaria de falar com a WSL Advocacia e Gestão sobre uma questão jurídica.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    legalArea: "",
    description: "",
    hasProcess: "",
    name: "",
    whatsapp: "",
    city: ""
  });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const submitQuizMutation = trpc.quiz.submit.useMutation({
    onSuccess: () => {
      setQuizSubmitted(true);
      toast.success("Respostas enviadas com sucesso!");
    },
    onError: (err) => {
      toast.error(`Erro ao enviar: ${err.message}`);
    }
  });

  const handleQuizNext = () => {
    if (quizStep === 1 && !quizData.legalArea) {
      toast.error("Por favor, selecione uma área.");
      return;
    }
    if (quizStep === 4 && (!quizData.name || quizData.name.length < 2)) {
      toast.error("Por favor, digite seu nome completo.");
      return;
    }
    if (quizStep === 5 && (!quizData.whatsapp || quizData.whatsapp.length < 8)) {
      toast.error("Por favor, informe seu WhatsApp.");
      return;
    }
    if (quizStep === 6 && (!quizData.city || quizData.city.length < 2)) {
      toast.error("Por favor, informe sua cidade.");
      return;
    }

    if (quizStep === 6) {
      // Final step submit
      submitQuizMutation.mutate(quizData);
    } else {
      setQuizStep(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a1128]/5 text-[#0e1a3c]">
      {/* HEADER FIXO */}
      <header className="sticky top-0 z-50 bg-[#0a1128] text-white border-b border-[#c5a059]/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#c5a059] to-[#9e7a32] flex items-center justify-center shadow-md">
              <Scale className="w-5 h-5 text-[#0a1128]" />
            </div>
            <div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#d4b572] transition-colors">
                WSL
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-[#d4b572]/90 uppercase font-sans">
                Advocacia e Gestão
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
            <a href="#inicio" className="hover:text-[#d4b572] transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[#d4b572] transition-colors">Sobre</a>
            <a href="#areas" className="hover:text-[#d4b572] transition-colors">Áreas de Atuação</a>
            <a href="#como-funciona" className="hover:text-[#d4b572] transition-colors">Como Funciona</a>
            <a href="#quiz" className="hover:text-[#d4b572] transition-colors">Quiz Jurídico</a>
            <a href="#contato" className="hover:text-[#d4b572] transition-colors">Contato</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => openWhatsApp()}
              className="bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-semibold px-5 py-2.5 rounded shadow-lg hover:shadow-xl transition-all duration-300"
            >
              FALAR COM A WSL
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#d4b572] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a1128] border-b border-[#c5a059]/20 px-6 py-6 space-y-4 shadow-xl">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium hover:text-[#d4b572] transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium hover:text-[#d4b572] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium hover:text-[#d4b572] transition-colors"
            >
              Áreas de Atuação
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium hover:text-[#d4b572] transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium hover:text-[#d4b572] transition-colors"
            >
              Quiz Jurídico
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium hover:text-[#d4b572] transition-colors"
            >
              Contato
            </a>
            <div className="pt-4">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-semibold py-3 rounded"
              >
                FALAR COM A WSL
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative bg-[#0a1128] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#d4b572] text-xs font-semibold tracking-wider uppercase">
                <Scale className="w-3.5 h-3.5" />
                Excelência e Dedicação Jurídica
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-white">
                Orientação jurídica com clareza, estratégia e atendimento próximo.
              </h1>

              <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                A <strong className="text-white font-medium">WSL Advocacia e Gestão</strong> oferece atendimento presencial e on-line em São Bernardo do Campo e para clientes de diferentes localidades.
              </p>

              <div className="pt-2 pb-2 border-l-2 border-[#c5a059] pl-4 text-left mx-auto lg:mx-0 max-w-md bg-[#142452]/40 p-3 rounded-r-lg">
                <p className="text-white font-semibold font-heading text-lg">William da Silva Lucas</p>
                <p className="text-[#d4b572] text-sm font-medium tracking-wide">OAB-SP nº 377.544</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de falar pelo WhatsApp com a WSL Advocacia.")}
                  size="lg"
                  className="bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-bold px-8 py-4 rounded shadow-lg flex items-center justify-center gap-2 text-base transition-all duration-300 hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5" />
                  Falar pelo WhatsApp
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#c5a059]/40 text-white hover:bg-white/10 px-8 py-4 rounded text-base font-medium transition-all duration-300"
                >
                  <a href="#areas">Conhecer as áreas de atuação</a>
                </Button>
              </div>
            </div>

            {/* Foto Profissional / Espaço Reservado */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a059] to-[#1c326e] rounded-xl blur-md opacity-30"></div>
                <div className="relative bg-[#142452] border border-[#c5a059]/30 rounded-xl overflow-hidden shadow-2xl p-6 text-center">
                  <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden relative shadow-inner mb-6 bg-[#0e1a3c] border border-[#c5a059]/20">
                    <img
                      src="/manus-storage/william-da-silva-lucas_c603274d.png"
                      alt="William da Silva Lucas, advogado responsável pela WSL Advocacia e Gestão"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">William da Silva Lucas</h3>
                  <p className="text-[#d4b572] text-sm font-medium mb-3">Advogado Responsável • OAB-SP nº 377.544</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>São Bernardo do Campo – SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE O ESCRITÓRIO */}
      <section id="sobre" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a059] font-heading text-sm font-bold tracking-widest uppercase">
              Institucional
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0a1128]">
              Conheça a WSL Advocacia e Gestão
            </h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed pt-2">
              Compromisso com a excelência técnica, ética profissional e atendimento transparente em cada caso confiado ao escritório.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-[#0a1128]">
                Atendimento humanizado, rigor técnico e estratégia personalizada
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Sob a liderança do advogado <strong className="font-medium text-[#0a1128]">William da Silva Lucas</strong> (OAB-SP nº 377.544), a <strong className="font-medium text-[#0a1128]">WSL Advocacia e Gestão</strong> atua com foco na resolução de conflitos e na proteção dos direitos de seus clientes com total discrição e rigor metodológico.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Entendemos que cada situação jurídica possui particularidades únicas. Por isso, oferecemos análises individuais e detalhadas, buscando sempre o melhor direcionamento para cada cliente, seja de forma consultiva ou contenciosa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-[#0a1128]/5 border border-[#0a1128]/10 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#0a1128] text-[#c5a059] mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#0a1128] text-sm">Atendimento Presencial</h4>
                    <p className="text-xs text-gray-600 mt-1">Escritório localizado no Centro de São Bernardo do Campo – SP.</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0a1128]/5 border border-[#0a1128]/10 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#0a1128] text-[#c5a059] mt-0.5">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#0a1128] text-sm">Atendimento On-line</h4>
                    <p className="text-xs text-gray-600 mt-1">Consultas e reuniões por vídeo com total segurança para clientes de todo o país.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#c5a059]/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-[#0a1128] text-white p-8 sm:p-10 rounded-xl shadow-2xl border border-[#c5a059]/30 space-y-6">
                  <h4 className="font-heading text-xl font-bold text-[#d4b572] border-b border-[#c5a059]/20 pb-4">
                    Nossos Diferenciais
                  </h4>
                  <ul className="space-y-4 font-sans text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Análise individualizada:</strong> Estudo aprofundado e dedicado de cada caso em particular.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Comunicação clara:</strong> Linguagem acessível, sem termos jurídicos confusos, mantendo o cliente sempre informado.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Flexibilidade:</strong> Atendimento presencial em São Bernardo do Campo e facilidade no formato on-line.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Ética e transparência:</strong> Atuação pautada rigorosamente nas normas da OAB e na proteção de dados (LGPD).</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button
                      onClick={() => openWhatsApp("Olá! Gostaria de agendar uma consulta com a WSL Advocacia.")}
                      className="w-full bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-bold py-3 rounded"
                    >
                      Agendar Consulta / Falar com o Advogado
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="py-20 lg:py-28 bg-[#f8f9fc] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a059] font-heading text-sm font-bold tracking-widest uppercase">
              Especialidades
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0a1128]">
              Áreas de Atuação Jurídica
            </h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed pt-2">
              Atuação especializada em ramos fundamentais do direito para resguardar seus interesses e direitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0a1128] text-[#c5a059] flex items-center justify-center mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0a1128] transition-colors shadow">
                  <Scale className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Direito Cível</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                  Assessoria e representação em contratos, responsabilidade civil, disputas de propriedade, cobranças, inventários e direito de família.
                </p>
              </div>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1128] group-hover:text-[#c5a059] transition-colors"
              >
                <span>Tenho uma questão jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0a1128] text-[#c5a059] flex items-center justify-center mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0a1128] transition-colors shadow">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Direito Previdenciário</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                  Orientação e requerimentos junto ao INSS, aposentadorias, benefícios por incapacidade, pensões e revisões de benefícios previdenciários.
                </p>
              </div>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1128] group-hover:text-[#c5a059] transition-colors"
              >
                <span>Tenho uma questão jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0a1128] text-[#c5a059] flex items-center justify-center mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0a1128] transition-colors shadow">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Direito do Consumidor</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                  Defesa em relações de consumo, negativação indevida, problemas com instituições financeiras, companhias aéreas e compras de produtos ou serviços.
                </p>
              </div>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1128] group-hover:text-[#c5a059] transition-colors"
              >
                <span>Tenho uma questão jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0a1128] text-[#c5a059] flex items-center justify-center mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0a1128] transition-colors shadow">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Direito Trabalhista</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                  Atuação em defesa dos direitos de empregados e empregadores, reclamações trabalhistas, rescisões, horas extras e verbas rescisórias.
                </p>
              </div>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1128] group-hover:text-[#c5a059] transition-colors"
              >
                <span>Tenho uma questão jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#0a1128] text-[#c5a059] flex items-center justify-center mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0a1128] transition-colors shadow">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Direito Criminal</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                  Acompanhamento em delegacias, audiências de custódia, defesa em inquéritos policiais e ações penais com absoluto sigilo e rigor técnico.
                </p>
              </div>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1128] group-hover:text-[#c5a059] transition-colors"
              >
                <span>Tenho uma questão jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a059] font-heading text-sm font-bold tracking-widest uppercase">
              Metodologia de Atendimento
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0a1128]">
              Como Funciona
            </h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed pt-2">
              Um processo simples, ágil e transparente para iniciar o seu atendimento jurídico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a1128]/5 rounded-xl p-8 border border-[#0a1128]/10 text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0a1128] text-[#c5a059] font-heading font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                01
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Você explica sua situação</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Preencha o nosso quiz jurídico interativo ou entre em contato diretamente pelo WhatsApp informando os detalhes do seu caso.
              </p>
            </div>

            <div className="bg-[#0a1128]/5 rounded-xl p-8 border border-[#0a1128]/10 text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0a1128] text-[#c5a059] font-heading font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                02
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">O caso é analisado individualmente</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                O advogado William da Silva Lucas analisa cuidadosamente as informações fornecidas para compreender a viabilidade e os direitos envolvidos.
              </p>
            </div>

            <div className="bg-[#0a1128]/5 rounded-xl p-8 border border-[#0a1128]/10 text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#0a1128] text-[#c5a059] font-heading font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-md">
                03
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0a1128] mb-3">Você recebe orientação sobre os próximos passos</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Entramos em contato para apresentar as opções estratégicas e agendar o atendimento presencial ou on-line adequado às suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ JURÍDICO INTERATIVO */}
      <section id="quiz" className="py-20 lg:py-28 bg-[#0a1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-[#d4b572] font-heading text-sm font-bold tracking-widest uppercase">
              Qualificação de Atendimento
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Descubra se você tem um caso
            </h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto rounded-full" />
            <p className="text-gray-300 text-base font-light leading-relaxed">
              Responda algumas perguntas para nos ajudar a entender melhor sua situação e agilizar o seu atendimento.
            </p>
          </div>

          <div className="bg-[#142452] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {!quizSubmitted ? (
              <div className="space-y-8">
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#d4b572] font-semibold tracking-wider uppercase">
                    <span>Etapa {quizStep} de 6</span>
                    <span>{Math.round((quizStep / 6) * 100)}% concluído</span>
                  </div>
                  <Progress value={(quizStep / 6) * 100} className="h-2 bg-[#0a1128]" />
                </div>

                {/* Step 1: Legal Area */}
                {quizStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      1. Qual área está relacionada ao seu caso?
                    </h3>
                    <RadioGroup
                      value={quizData.legalArea}
                      onValueChange={(val) => setQuizData({ ...quizData, legalArea: val })}
                      className="space-y-3"
                    >
                      {[
                        "Direito Cível",
                        "Direito Previdenciário",
                        "Direito do Consumidor",
                        "Direito Trabalhista",
                        "Direito Criminal",
                        "Não sei identificar"
                      ].map((area) => (
                        <div
                          key={area}
                          className="flex items-center space-x-3 p-4 rounded-xl bg-[#0a1128] border border-[#c5a059]/20 hover:border-[#c5a059] transition-colors cursor-pointer"
                        >
                          <RadioGroupItem value={area} id={area} className="border-[#c5a059] text-[#c5a059]" />
                          <Label htmlFor={area} className="text-white font-medium cursor-pointer flex-1">
                            {area}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Step 2: Description */}
                {quizStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      2. Conte brevemente o que aconteceu.
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Descreva os pontos principais para entendermos sua demanda inicial.
                    </p>
                    <Textarea
                      placeholder="Ex: Comprei um produto que veio com defeito e a loja se recusa a trocar..."
                      value={quizData.description}
                      onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                      className="bg-[#0a1128] border-[#c5a059]/30 text-white placeholder:text-gray-500 min-h-[140px] p-4 rounded-xl"
                    />
                  </div>
                )}

                {/* Step 3: Has Process */}
                {quizStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      3. Você já possui algum processo relacionado a essa situação?
                    </h3>
                    <RadioGroup
                      value={quizData.hasProcess}
                      onValueChange={(val) => setQuizData({ ...quizData, hasProcess: val })}
                      className="space-y-3"
                    >
                      {["Sim", "Não", "Não sei"].map((opt) => (
                        <div
                          key={opt}
                          className="flex items-center space-x-3 p-4 rounded-xl bg-[#0a1128] border border-[#c5a059]/20 hover:border-[#c5a059] transition-colors cursor-pointer"
                        >
                          <RadioGroupItem value={opt} id={`proc-${opt}`} className="border-[#c5a059] text-[#c5a059]" />
                          <Label htmlFor={`proc-${opt}`} className="text-white font-medium cursor-pointer flex-1">
                            {opt}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Step 4: Name */}
                {quizStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      4. Qual é o seu nome?
                    </h3>
                    <Input
                      type="text"
                      placeholder="Seu nome completo"
                      value={quizData.name}
                      onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                      className="bg-[#0a1128] border-[#c5a059]/30 text-white placeholder:text-gray-500 h-12 px-4 rounded-xl"
                    />
                  </div>
                )}

                {/* Step 5: WhatsApp */}
                {quizStep === 5 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      5. Qual é o seu WhatsApp para contato?
                    </h3>
                    <Input
                      type="text"
                      placeholder="(11) 99999-9999"
                      value={quizData.whatsapp}
                      onChange={(e) => setQuizData({ ...quizData, whatsapp: e.target.value })}
                      className="bg-[#0a1128] border-[#c5a059]/30 text-white placeholder:text-gray-500 h-12 px-4 rounded-xl"
                    />
                  </div>
                )}

                {/* Step 6: City */}
                {quizStep === 6 && (
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      6. Em qual cidade você está?
                    </h3>
                    <Input
                      type="text"
                      placeholder="Ex: São Bernardo do Campo – SP"
                      value={quizData.city}
                      onChange={(e) => setQuizData({ ...quizData, city: e.target.value })}
                      className="bg-[#0a1128] border-[#c5a059]/30 text-white placeholder:text-gray-500 h-12 px-4 rounded-xl"
                    />
                  </div>
                )}

                {/* Buttons Navigation */}
                <div className="flex justify-between pt-6 border-t border-[#c5a059]/20">
                  {quizStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={() => setQuizStep(prev => prev - 1)}
                      className="border-[#c5a059]/40 text-white hover:bg-white/10"
                    >
                      Voltar
                    </Button>
                  ) : <div />}

                  <Button
                    onClick={handleQuizNext}
                    disabled={submitQuizMutation.isPending}
                    className="bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-bold px-8 py-3 rounded"
                  >
                    {quizStep === 6 ? (submitQuizMutation.isPending ? "Enviando..." : "Finalizar e Ver Resultado") : "Avançar"}
                  </Button>
                </div>
              </div>
            ) : (
              /* Success / Result View */
              <div className="text-center space-y-6 py-8">
                <div className="w-16 h-16 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto border border-[#c5a059]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Obrigado pelas informações, {quizData.name}!
                </h3>
                <p className="text-gray-300 max-w-lg mx-auto text-sm leading-relaxed">
                  Seus dados foram recebidos. A equipe da <strong className="text-white">WSL Advocacia e Gestão</strong> poderá avaliar as informações fornecidas ({quizData.legalArea}) e entrar em contato.
                </p>
                <div className="p-4 rounded-xl bg-[#0a1128] border border-[#c5a059]/30 text-xs text-gray-400 max-w-md mx-auto">
                  Nota: O preenchimento deste formulário possui caráter informativo e institucional, não constituindo parecer jurídico ou garantia de resultado.
                </div>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      const msg = `Olá, meu nome é ${quizData.name}, estou em ${quizData.city}. Respondi ao quiz sobre ${quizData.legalArea}. Relato: ${quizData.description || "Gostaria de atendimento."}`;
                      openWhatsApp(msg);
                    }}
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded shadow-xl flex items-center justify-center gap-3 mx-auto"
                  >
                    <Phone className="w-5 h-5" />
                    Continuar pelo WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEÇÃO ATENDIMENTO */}
      <section id="atendimento" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a059] font-heading text-sm font-bold tracking-widest uppercase">
              Localização e Contato
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0a1128]">
              Atendimento presencial e on-line
            </h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed pt-2">
              Venha nos visitar em São Bernardo do Campo ou receba atendimento digital com total segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-xl bg-[#0a1128] text-white border border-[#c5a059]/30 shadow-xl space-y-6">
                <h3 className="font-heading text-xl font-bold text-[#d4b572] border-b border-[#c5a059]/20 pb-4">
                  WSL Advocacia e Gestão
                </h3>

                <div className="space-y-4 text-sm font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Endereço:</strong>
                      <p className="text-gray-300">Rua José Versolato, 111, 11º andar, Sala 1101,</p>
                      <p className="text-gray-300">Centro, São Bernardo do Campo – SP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Telefone / WhatsApp:</strong>
                      <p className="text-gray-300">(11) 98020-7406</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">E-mail:</strong>
                      <p className="text-gray-300">wiliamlucasadv@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium">Responsável:</strong>
                      <p className="text-gray-300">William da Silva Lucas</p>
                      <p className="text-[#d4b572] text-xs font-semibold">OAB-SP nº 377.544</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={() => window.open("https://maps.google.com/?q=Rua+Jose+Versolato+111+Sao+Bernardo+do+Campo", "_blank")}
                    variant="outline"
                    className="border-[#c5a059]/40 text-white hover:bg-white/10 flex-1"
                  >
                    Traçar Rota
                  </Button>
                  <Button
                    onClick={() => openWhatsApp("Olá! Gostaria de falar pelo WhatsApp com a WSL Advocacia.")}
                    className="bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-bold flex-1"
                  >
                    Falar pelo WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 relative bg-gray-100">
                <img
                  src="/manus-storage/edificio-domo-111_d9e5aa50.png"
                  alt="Fachada do edifício Domo, na Rua José Versolato, 111, em São Bernardo do Campo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/45 to-transparent p-6 pt-16">
                  <p className="text-white font-heading text-lg font-semibold">Domo Business • Rua José Versolato, 111</p>
                  <p className="text-gray-200 text-sm mt-1">Centro, São Bernardo do Campo – SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO FINAL */}
      <section id="contato" className="py-20 bg-[#f8f9fc] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-[#c5a059] font-heading text-sm font-bold tracking-widest uppercase">
              Entre em Contato
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0a1128]">
              Pronto para resolver sua questão jurídica?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-light max-w-2xl mx-auto">
              Nossa equipe está preparada para oferecer o suporte necessário com total sigilo e profissionalismo.
            </p>
          </div>

          <div className="pt-4">
            <Button
              onClick={() => openWhatsApp("Olá! Gostaria de falar com a WSL Advocacia.")}
              size="lg"
              className="bg-[#c5a059] hover:bg-[#b08d46] text-[#0a1128] font-bold px-10 py-5 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              Falar com a WSL Advocacia
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1128] text-white pt-16 pb-12 border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#c5a059] flex items-center justify-center text-[#0a1128]">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="font-heading text-lg font-bold">WSL Advocacia</span>
              </div>
              <p className="text-gray-400 text-sm font-light">
                William da Silva Lucas<br />
                <span className="text-[#d4b572] font-medium">OAB-SP nº 377.544</span>
              </p>
              <p className="text-gray-400 text-xs font-light">
                São Bernardo do Campo – SP
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-sm font-bold text-[#d4b572] uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-light">
                <li><a href="#inicio" className="hover:text-[#d4b572] transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-[#d4b572] transition-colors">Sobre o Escritório</a></li>
                <li><a href="#areas" className="hover:text-[#d4b572] transition-colors">Áreas de Atuação</a></li>
                <li><a href="#quiz" className="hover:text-[#d4b572] transition-colors">Quiz Jurídico</a></li>
                <li><a href="#contato" className="hover:text-[#d4b572] transition-colors">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-sm font-bold text-[#d4b572] uppercase tracking-wider">
                Contato Direto
              </h4>
              <p className="text-sm text-gray-300 font-light">
                Rua José Versolato, 111, 11º andar, Sala 1101<br />
                Centro, São Bernardo do Campo – SP<br />
                WhatsApp: (11) 98020-7406<br />
                E-mail: wiliamlucasadv@gmail.com
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-sm font-bold text-[#d4b572] uppercase tracking-wider">
                Privacidade & LGPD
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                As informações coletadas neste site são tratadas com total confidencialidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-[#c5a059]/20 text-center space-y-4">
            <p className="text-xs text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              "As informações apresentadas neste site possuem caráter institucional e informativo e não substituem orientação jurídica individualizada."
            </p>
            <p className="text-xs text-gray-500 font-light">
              © {new Date().getFullYear()} WSL Advocacia e Gestão • William da Silva Lucas (OAB-SP nº 377.544). Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP FIXO */}
      <button
        onClick={() => openWhatsApp("Olá! Gostaria de falar com a WSL Advocacia através do botão flutuante.")}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar pelo WhatsApp"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out text-sm font-semibold">
          Falar no WhatsApp
        </span>
      </button>
    </div>
  );
}
