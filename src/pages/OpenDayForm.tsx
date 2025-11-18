import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function OpenDayForm() {
  const navigate = useNavigate()
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE/viewform?embedded=true"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Button>
            <h1 className="text-2xl font-bold text-golf-green">
              Iscrizione Open Days
            </h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-golf-green">
                Iscriviti agli Open Days
              </CardTitle>
              <p className="text-gray-600 mt-4">
                Compila il form sottostante per iscriverti ai prossimi Open Days del programma Montecchia & Friends
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Google Form iframe */}
              <div className="mb-8">
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <div className="text-6xl">📝</div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Form di Iscrizione
                    </h3>
                    <p className="text-gray-600">
                      Il form Google sarà integrato qui. Per ora, clicca il pulsante sottostante per accedere al form esterno.
                    </p>
                    <Button
                      variant="golf"
                      size="lg"
                      className="mt-4"
                      onClick={() => window.open('https://forms.google.com', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apri Form di Iscrizione
                    </Button>
                  </div>
                </div>
                
                {/* Placeholder for actual Google Form iframe */}
                {/* 
                <iframe
                  src={FORM_URL}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg shadow-sm"
                >
                  Caricamento in corso...
                </iframe>
                */}
              </div>

              {/* Additional info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Informazioni importanti:
                </h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• L'iscrizione è gratuita per tutti i soci del Golf della Montecchia</li>
                  <li>• Riceverai una conferma via email entro 24 ore</li>
                  <li>• In caso di maltempo, l'evento potrebbe essere rimandato</li>
                  <li>• Per annullamenti, contatta la segreteria almeno 48 ore prima</li>
                </ul>
              </div>

              {/* Contact info */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Hai domande? Contatta la segreteria del club
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="sm">
                    📞 049 805 1000
                  </Button>
                  <Button variant="outline" size="sm">
                    ✉️ info@golfmontecchia.it
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
