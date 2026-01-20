# Claude Skills Directory

This directory contains Claude Skills that are automatically activated based on natural language queries.

## Available Skills

1. **tech-stack-selector** - Technology decision framework
2. **architecture-decisions** - Architecture Decision Records (ADRs)
3. **code-standards-enforcer** - Code quality and review checklist
4. **ci-cd-pipeline-builder** - CI/CD pipeline automation
5. **agile-executor** - Sprint planning and Agile ceremonies
6. **project-risk-identifier** - Risk assessment framework
7. **automation-orchestrator** - Manage setup/validate/deploy scripts

## Structure

Each skill follows the Anthropic Skills framework:

```
.claude/skills/[skill-name]/
├── SKILL.md          # Main skill definition
├── references/       # Detailed documentation and templates
└── scripts/          # Utility scripts for automation
```

## Usage

Skills are auto-activated when you ask Claude relevant questions:

- "What tech stack should we use?" → tech-stack-selector
- "Create an ADR" → architecture-decisions
- "Code review checklist" → code-standards-enforcer
- "Setup CI/CD" → ci-cd-pipeline-builder
- "Plan sprint" → agile-executor
- "Identify risks" → project-risk-identifier
- "Set up Claude skills" → automation-orchestrator

## Testing

Test skills in Claude Code:

```bash
claude "What skills are available?"
```

## Documentation

- Each skill's `SKILL.md` contains activation triggers and usage
- `references/` directories contain detailed guides and templates
- `scripts/` directories contain automation utilities

## Setup

Run the setup script to ensure proper structure:

```bash
./scripts/claude-skills/setup-claude-skills.sh
```

Validate setup:

```bash
./scripts/claude-skills/validate-claude-skills.sh
```

Or use the automation-orchestrator skill:

```bash
# Ask Claude: "Use the automation orchestrator skill to set up skills here"
```

## Best Practices

- Skills are version-controlled with your codebase
- Team members automatically have access via git
- Skills stay in sync across the team
- Customize skills for your project needs

## References

- [Anthropic Skills Framework](https://github.com/anthropics/skills)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)

