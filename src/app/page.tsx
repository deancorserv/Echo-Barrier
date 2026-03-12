import Image from 'next/image'
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
          <Image
            src="/Echo-Barrier/images/Echo Assist Icon.svg"
            alt="Echo Assist"
            width={140}
            height={50}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
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
