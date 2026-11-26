# 8760 HOURS V1.3 Compact Calendar + Data Protection

Built directly from the locked V1.2 Annual Planning baseline. Preserves `Hours8760DB` version 1.

Adds persistent year-aware Compact Calendar month notes and Year Notes, Annual Plan context, Complete Backup Format V1 with SHA-256 verification, replace-only restore with verified pre-restore recovery snapshot and rollback, Recovery Centre, and enhanced System Check.

## Mandatory test gate
1. Create notes in multiple months across two years; switch years, reload, and restart.
2. Export a Complete Backup and retain it.
3. Deliberately change review, plan, goal, and calendar data.
4. Restore the retained backup.
5. Verify original Reviews, History, Annual Plan, Ideal Future, Goals, Metrics, Uncertainties, Sub-projects, and Calendar notes.
6. Restart and verify again.
