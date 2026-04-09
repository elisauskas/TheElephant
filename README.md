# The Elephant

A cinematic, scrollable website telling the story of a zero-downtime Aurora PostgreSQL 13→17 major version upgrade across 30 clusters and 7 production environments — told through the allegory of renovating thirty restaurants while every seat stays full.

PostgreSQL 13 clusters approaching end of standard support. AWS Extended Support fees accumulating. Thirty kitchens needing replacement. Seven cities. Every restaurant fully packed.

Using live logical replication, a custom switchover script, and an opportunistic pause mechanism — zero downtime, zero errors, thirty times over.

## The allegory

| In the story | In reality |
|---|---|
| City | Production environment |
| Restaurant | Aurora cluster |
| Kitchen | Database engine |
| Diner | Application (reads and writes) |
| Meal | Transaction |
| Waiting staff | PgBouncer |
| Manager | Switchover script |
| Old kitchen | Aurora PostgreSQL 13 |
| New kitchen | Aurora PostgreSQL 17 |
| Locking the kitchen door | Security group isolation |

## Built with

Plain HTML, CSS, JavaScript — no framework, no build step. Hosted on GitHub Pages.
