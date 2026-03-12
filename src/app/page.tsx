import EchoAssistAgent from '@/components/EchoAssistAgent'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        background: '#f5f5f5',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '12px',
          }}
        >
          {/* Echo Barrier wordmark / brand accent */}
          <div
            style={{
              width: '8px',
              height: '40px',
              background: '#FF7026',
              borderRadius: '4px',
            }}
          />
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FF7026',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Echo Barrier
            </p>
            <h1
              style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: 700,
                color: '#000000',
                fontFamily: 'Roboto, sans-serif',
                lineHeight: 1.2,
              }}
            >
              Echo Assist
            </h1>
          </div>
        </div>
        <p
          style={{
            margin: 0,
            color: '#666',
            fontSize: '15px',
            fontFamily: 'Roboto, sans-serif',
            maxWidth: '400px',
          }}
        >
          Your AI-powered sales and product knowledge assistant
        </p>
      </div>

      {/* Agent card */}
      <EchoAssistAgent />

      {/* Footer */}
      {/* <p
        style={{
          marginTop: '40px',
          color: '#bbb',
          fontSize: '12px',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Powered by Echo Barrier &amp; ElevenLabs AI
      </p> */}
    </main>
  )
}
