import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle2, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const sanitizeCep = (value: string) => value.replace(/\D/g, "").slice(0, 8);

const formatCep = (value: string) => {
  const digits = sanitizeCep(value);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
};

const Coverage = () => {
  const [cep, setCep] = useState("");
  const { toast } = useToast();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = sanitizeCep(cep);
    if (digits.length !== 8) {
      toast({
        title: "CEP inválido",
        description: "Digite um CEP com 8 dígitos.",
        variant: "destructive",
      });
      return;
    }

    const available = parseInt(digits[digits.length - 1] ?? "0", 10) % 2 === 0;
    if (available) {
      toast({
        title: "Cobertura disponível!",
        description: "Temos disponibilidade de instalação na sua região.",
      });
    } else {
      toast({
        title: "Em breve",
        description: "Estamos expandindo a rede. Deixe seu contato no formulário para ser avisado.",
      });
    }
  };

  return (
    <section id="cobertura" className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.08),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Cobertura</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Verifique a disponibilidade na sua região
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos Ipatinga, Timóteo e Coronel Fabriciano e estamos expandindo.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleCheck} className="grid sm:grid-cols-[1fr_auto] gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <Input
                  value={cep}
                  onChange={(e) => setCep(formatCep(e.target.value))}
                  placeholder="Seu CEP (00000-000)"
                  inputMode="numeric"
                />
              </div>
              <Button type="submit" className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary">
                Verificar
              </Button>
            </form>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Ipatinga
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Timóteo
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Coronel Fabriciano
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 flex items-center justify-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Instalação rápida</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 100% fibra até sua casa</div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;


