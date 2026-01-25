# Project Architect - North Star Routing

## Agent Mapping Matrix
| Role | Primary Agent | Focused Skills |
|------|---------------|----------------|
| **Project Planning** | `project-planner` | `plan-writing`, `brainstorming` |
| **System Architecture** | `architecture` | `design-patterns`, `database-design` |
| **UI/UX Design** | `ui-ux-pro-max` | `frontend-design`, `tailwind-patterns` |
| **Frontend Dev** | `frontend-specialist` | `react-patterns`, `nextjs-best-practices` |
| **Backend/API** | `backend-specialist` | `api-patterns`, `supabase-mcp` |
| **SEO & GEO** | `seo-specialist` | `geo-fundamentals`, `seo-fundamentals` |
| **Testing/QA** | `test-engineer` | `webapp-testing`, `testing-patterns` |
| **Security** | `security-auditor` | `vulnerability-scanner` |
| **Final Review** | `orchestrator` | `clean-code`, `code-review-checklist` |

## Project-Specific Delegation Rules

### 1. Aesthetic Guardrails
- **Agent**: `ui-ux-pro-max`
- **Rule**: Every component must be reviewed for "Ranchy but Professional" vibe.
- **Palette**: Deep Forest Green, Burnished Gold, Earthy Leather Brown.
- **Constraint**: Desktop-first layout. No mobile-first thinking for primary layout.

### 2. Backend Routing
- **Agent**: `backend-specialist`
- **Logic**: All lead data MUST flow into Supabase `leads` table.
- **Failover**: Use `lead-notifier` edge function for email dispatch.

### 3. SEO & Local Growth
- **Agent**: `seo-specialist`
- **Focus**: Local SEO for Aiken, SC and Augusta, GA metro areas.
- **Mandate**: Descriptive meta titles for all service pages.

### 4. Code Quality
- **Agent**: `orchestrator`
- **Rule**: Small, focused files in `components/`, `lib/`, and `hooks/`.
- **Typing**: Strict TypeScript definitions for all data structures.

---

## Orchestration Workflow
1. **Analyze**: Read user request.
2. **Consult**: Check `DOE.md` for principles and `architect.md` for routing.
3. **Delegate**: Assign to specialized agent/skill.
4. **Execute**: Build with "Amazing quality" as the baseline.
5. **Verify**: Run automated checks (`checklist.py`) before reporting completion.

---
**Status**: ACTIVE
**Target**: Premium High-Margin irrigation leads.
