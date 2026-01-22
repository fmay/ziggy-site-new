# Data Migrations

A data migration is the structured process of transferring data from one system, storage location, or format to another, while preserving data integrity, accuracy, and usability.

In practical terms, it involves moving data such as customer records, transactions, files, or configurations between environments—for example, from a legacy database to a modern cloud platform.

## Key characteristics

Source and target systems: Data moves from an existing system (source) to a new system (target), which may differ in technology, schema, or data model.

- **Transformation**: Data often needs to be cleaned, normalized, restructured, or enriched to meet the requirements of the target system.
- **Validation**: Post-migration checks ensure completeness, correctness, and consistency of the migrated data.
- **Controlled execution**: Migrations are typically planned, tested, and executed in phases to minimize risk and downtime. Migrated data is best quality controlled in a sandboxed environment before the final production migration.

## How Ziggy handles migrations

