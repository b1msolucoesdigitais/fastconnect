import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const logos = [
    { name: "Cisco", color: "bg-sky-500", text: "C" },
    { name: "Intelbras", color: "bg-emerald-500", text: "I" },
    { name: "Huawei", color: "bg-red-500", text: "H" },
    { name: "MikroTik", color: "bg-zinc-600", text: "M" },
    { name: "TP-Link", color: "bg-cyan-500", text: "TP" },
    { name: "Ubiquiti", color: "bg-indigo-500", text: "U" },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-6">
          Conectados com os melhores parceiros de tecnologia
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-lg ${logo.color} text-white font-bold flex items-center justify-center`}>
                    {logo.text}
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">{logo.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


