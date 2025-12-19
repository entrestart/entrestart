const steps = [
  {
    number: "1",
    title: "Créez votre profil",
    description: "Inscrivez-vous en quelques minutes et présentez vos services et votre expertise.",
  },
  {
    number: "2",
    title: "Soyez découvert",
    description: "Les entrepreneurs recherchent vos compétences et vous contactent directement.",
  },
  {
    number: "3",
    title: "Développez votre activité",
    description: "Signez des contrats, recevez des paiements et faites grandir votre réputation.",
  },
]

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Simple et efficace</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Trois étapes pour transformer votre expertise en opportunités
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
