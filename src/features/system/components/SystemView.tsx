import { Badge } from '@shared/ui/Badge'
import { domains, inventory, skills } from '../system.rules'

export function SystemView() {
  return (
    <section className="system-grid">
      <div className="panel">
        <div className="panel__title">Skill Tree</div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className={`skill-node ${skill.unlocked ? 'skill-node--unlocked' : ''}`} key={skill.id}>
              <Badge tone={skill.unlocked ? 'good' : 'neutral'}>{skill.branch}</Badge>
              <h3>{skill.name}</h3>
              <p>{skill.requirement}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel__title">Inventory</div>
        <div className="inventory-grid">
          {inventory.map((item) => (
            <article className="inventory-item" key={item.id}>
              <Badge>{item.type}</Badge>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="panel panel--wide">
        <div className="panel__title">World Map</div>
        <div className="domain-grid">
          {domains.map((domain) => (
            <article className="domain-card" key={domain.id}>
              <div>
                <h3>{domain.name}</h3>
                <Badge tone={domain.state === 'stable' ? 'good' : domain.state === 'watch' ? 'warn' : 'bad'}>
                  {domain.state}
                </Badge>
              </div>
              <p>{domain.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
