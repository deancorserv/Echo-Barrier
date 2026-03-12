'use client'

import { useConversation } from '@elevenlabs/react'

const AGENT_ID = 'agent_01jyrr07e8eqbazm1txte3csbp'

type Status = 'idle' | 'connecting' | 'connected'

export default function EchoAssistAgent() {
  const conversation = useConversation({
    onConnect: () => console.log('Echo Assist connected'),
    onDisconnect: () => console.log('Echo Assist disconnected'),
    onError: (error) => console.error('Echo Assist error:', error),
  })

  const status: Status = conversation.status === 'connected'
    ? 'connected'
    : conversation.status === 'connecting'
    ? 'connecting'
    : 'idle'

  const isSpeaking = conversation.isSpeaking

  const handleStart = async () => {
    await navigator.mediaDevices.getUserMedia({ audio: true })
    await conversation.startSession({
      agentId: AGENT_ID,
      connectionType: 'webrtc',
    })
  }

  const handleStop = () => {
    conversation.endSession()
  }

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '480px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      {/* Visual indicator */}
      <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Pulse rings when connected */}
        {status === 'connected' && (
          <>
            <div
              className="pulse-ring"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid #FF7026',
                animationDelay: '0s',
              }}
            />
            <div
              className="pulse-ring"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid #FF7026',
                animationDelay: '0.4s',
              }}
            />
          </>
        )}

        {/* Center circle */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: status === 'idle' ? '#f5f5f5' : '#FF7026',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
            flexShrink: 0,
          }}
        >
          {status === 'connecting' ? (
            /* Spinner */
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="3" strokeDasharray="60 20" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
              </circle>
            </svg>
          ) : status === 'connected' && isSpeaking ? (
            /* Wave bars when speaking */
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '32px' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="wave-bar"
                  style={{
                    width: '4px',
                    height: '28px',
                    background: 'white',
                    borderRadius: '2px',
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </div>
          ) : status === 'connected' ? (
            /* Mic icon when listening */
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            /* Mic icon when idle */
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#999">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#999" strokeWidth="2" strokeLinecap="round" fill="none" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="#999" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="23" x2="16" y2="23" stroke="#999" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </div>

      {/* Status label */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            background:
              status === 'idle' ? '#f5f5f5' :
              status === 'connecting' ? '#fff3ec' :
              isSpeaking ? '#fff3ec' : '#ecfdf5',
            color:
              status === 'idle' ? '#888' :
              status === 'connecting' ? '#FF7026' :
              isSpeaking ? '#FF7026' : '#16a34a',
          }}
        >
          {status === 'idle' && 'Ready to connect'}
          {status === 'connecting' && 'Connecting...'}
          {status === 'connected' && isSpeaking && 'Echo Assist is speaking'}
          {status === 'connected' && !isSpeaking && 'Listening...'}
        </span>
      </div>

      {/* Button */}
      {status === 'idle' || status === 'connecting' ? (
        <button
          onClick={handleStart}
          disabled={status === 'connecting'}
          style={{
            backgroundColor: status === 'connecting' ? '#f0c4a8' : '#FF7026',
            color: '#ffffff',
            border: 'none',
            borderRadius: '40px',
            padding: '14px 40px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'Roboto, sans-serif',
            cursor: status === 'connecting' ? 'not-allowed' : 'pointer',
            boxShadow: status === 'connecting' ? 'none' : '0 4px 20px rgba(255, 112, 38, 0.35)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (status !== 'connecting') {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#e05e1a'
            }
          }}
          onMouseLeave={(e) => {
            if (status !== 'connecting') {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FF7026'
            }
          }}
        >
          {status === 'connecting' ? 'Connecting...' : 'Start Conversation'}
        </button>
      ) : (
        <button
          onClick={handleStop}
          style={{
            backgroundColor: 'transparent',
            color: '#888',
            border: '1px solid #e0e0e0',
            borderRadius: '40px',
            padding: '14px 40px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'Roboto, sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#FF7026'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#FF7026'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#e0e0e0'
            ;(e.currentTarget as HTMLButtonElement).style.color = '#888'
          }}
        >
          End Conversation
        </button>
      )}

      {/* Description */}
      <p
        style={{
          margin: 0,
          color: '#888',
          fontSize: '14px',
          lineHeight: '1.6',
          fontFamily: 'Roboto, sans-serif',
          maxWidth: '360px',
        }}
      >
        Ask Echo Assist anything about Echo Barrier products, product specifications, or noise ordinance regulations in your local area.
      </p>
    </div>
  )
}
