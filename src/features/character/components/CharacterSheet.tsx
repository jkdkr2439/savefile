import { Battery, Brain, Coins, Crosshair, HeartPulse, Radio, ShieldAlert, Terminal } from 'lucide-react'
import { debuffCatalog } from '@features/logs/debuff.rules'
import type { Quest } from '@features/quests/quest.types'
import { Badge } from '@shared/ui/Badge'
import { StatBar } from '@shared/ui/StatBar'
import { buildProfiles } from '../character.rules'
import type { CharacterState } from '../character.types'

type CharacterSheetProps = {
  character: CharacterState
  quests: Quest[]
}

const resourceLabels = {
  energy: { label: 'Energy', icon: Battery },
  focus: { label: 'Focus', icon: Brain },
  stress: { label: 'Stress', icon: ShieldAlert },
  moneyBuffer: { label: 'Money buffer', icon: Coins },
  socialBandwidth: { label: 'Social bandwidth', icon: Radio },
  healthBaseline: { label: 'Health baseline', icon: HeartPulse },
}

export function CharacterSheet({ character, quests }: CharacterSheetProps) {
  const build = buildProfiles[character.currentBuild]
  const activeQuest = quests.find((quest) => quest.status === 'active')
  const debuffs = character.activeDebuffIds
    .map((id) => debuffCatalog.find((debuff) => debuff.id === id))
    .filter(Boolean)

  return (
    <section className="sheet-grid">
      <div className="panel panel--hero">
        <div className="panel__eyebrow">Character Sheet</div>
        <h2>{character.name}</h2>
        <p>{character.season}</p>
        <div className="save-slot">
          <span>Save slot</span>
          <strong>Local-01</strong>
        </div>
        <div className="hero-row">
          <Badge tone="good">{character.currentBuild} build</Badge>
          <Badge tone={activeQuest ? 'warn' : 'neutral'}>{activeQuest?.title ?? 'No active quest'}</Badge>
        </div>
      </div>

      <div className="panel">
        <div className="panel__title">Current Build</div>
        <h3>{character.currentBuild}</h3>
        <p>{build.strength}</p>
        <div className="risk-line">Risk: {build.risk}</div>
        <div className="patch-line">Patch: {build.suggestedPatch}</div>
      </div>

      <div className="panel">
        <div className="panel__title"><Crosshair size={17} /> Active Quest</div>
        {activeQuest ? (
          <div className="active-quest">
            <Badge tone="warn">{activeQuest.type}</Badge>
            <h3>{activeQuest.title}</h3>
            <p>{activeQuest.output}</p>
            <div className="mini-ipod">
              <span>Input</span>
              <strong>{activeQuest.input}</strong>
            </div>
          </div>
        ) : (
          <p>No active quest. Pick one before spending the gold slot.</p>
        )}
      </div>

      <div className="panel panel--wide">
        <div className="panel__title">Resources</div>
        <div className="resources-grid">
          {Object.entries(character.resources).map(([key, value]) => {
            const item = resourceLabels[key as keyof typeof resourceLabels]
            const Icon = item.icon
            const tone = key === 'stress' ? (value > 65 ? 'bad' : 'warn') : value > 60 ? 'good' : 'warn'
            return (
              <div className="resource-card" key={key}>
                <Icon size={18} />
                <StatBar label={item.label} value={value} tone={tone} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="panel">
        <div className="panel__title">Active Debuffs</div>
        <div className="debuff-stack">
          {debuffs.map((debuff) =>
            debuff ? (
              <article className="debuff-card" key={debuff.id}>
                <div>
                  <h3>{debuff.name}</h3>
                  <Badge tone={debuff.severity === 'high' ? 'bad' : 'warn'}>{debuff.severity}</Badge>
                </div>
                <p>{debuff.signal}</p>
              </article>
            ) : null,
          )}
        </div>
      </div>

      <div className="panel">
        <div className="panel__title"><Terminal size={17} /> System Console</div>
        <div className="console-lines">
          <p><span>Notice</span> Stress is above comfort range. Avoid adding boss quests today.</p>
          <p><span>Patch</span> Protect the first 90 minutes after waking for the main quest.</p>
          <p><span>Rule</span> Do not deploy more than one habit change at a time.</p>
        </div>
      </div>
    </section>
  )
}
