# Data Migrations

A data migration is the structured process of transferring data from one system, storage location, or format to another, while preserving data integrity, accuracy, and usability.

In practical terms, it involves moving data such as customer records, transactions, files, or configurations between environments—for example, from a legacy database to a modern cloud platform.

## Outsource your migration

If you have a complex migration to be handled for you, please [contact us](/contact), and we will connect you with a Ziggy Partner, or we'll handle this in-house.

## Key characteristics

Source and target systems: Data moves from an existing system (source) to a new system (target), which may differ in technology, schema, or data model.

As a result, migrations can be very complex. They require detailed discovery, implementation and discovery. As a result, they are often best carried out by companies who have migration experience, in consultation with the customer. 

- **Transformation**: Data often needs to be normalized, restructured, or enriched to meet the requirements of the target system.
- **Cleansing**: A migration is a good time to perform data cleaning operations. This can involve automated processes or creating logs of invalid records that need a manual review before reprocessing.
- **Validation**: Post-migration checks ensure completeness, correctness, and consistency of the migrated data.
- **Controlled execution**: Migrations are typically planned, tested, and executed in phases to minimize risk and downtime. Migrated data is ideally quality controlled in a sandboxed environment before the final production migration.
- **Audit**: some organization may require a comprehensive audit trail, documenting precisely what was migrated and the final data structure.
- **Testing and validation**: The potentially many phases of a migration should be tested and validated independently with the ability to rerun as required.
- **Production migration**: The final migration to a production platform needs careful planning. It needs to be sensitive to downtime and the time required to migrate potentially millions of records. A dry run is especially strongly recommended when migrating into systems that are already operational.

## Examples
Two common migration examples are 

- Legacy CRM to a new CRM
- Data from multiple platforms and data stores into a new ERP platform.

A CRM system usually has many objects that needs migrating.

- Customers
- Contacts
- Deals and Line Items
- Custom Objects
- Activities (calls, emails, tasks, todos etc.)
- Email Attachments

Often you will need data from a legacy setup that is spread across multiple systems and databases. These will need to be pre-processed, transformed and cleansed such that for each target CRM object, the data is ready to be loaded.

An ERP migration is often similar in nature.

## Managing migrations with Ziggy

Ziggy manages migrations with Ziggy Flows. A very simple migration can accomplish everything with a single Flow. However, complex migrations will require many Flows, each of which handles a discreet part of the migration.

Below is a simple flow that imports customers from a database (but this could be any data source or multiple connected sources) into a data store, where further auditing and checking operations could be performed.

![Customer Import](/blog/migrations/migrate-customers-import.webp)

Once checks have been performed, the migration to the target platform or sandbox can be performed. The orange block is the objects that writes the data into the target object (Hubspot Company object).

![Customer Export](/blog/migrations/migrate-customers-import.webp)

Most migrations follow a similar pattern although the Flows are usually more complex for real-world scenarios.

## Associating Objects

An important component of a migration is the correct association between object records and types.

Let's say you are importing 1 million companies and 5 million contacts. Getting those into your target CRM is only one step. You then need to ensure that each company is correctly associated with its contacts.

Special Ziggy blocks take care of this. In the flow below

- We are getting the associations between companies and deals.
- And between Deals and Line Items.
- Then storing them to a data store.

![Import Associations](/blog/migrations/migrate-import-associations.webp)

When we are ready to migrate to the target platform

- we read from the above associations data store 
- and then write the association data to our CRM platform (circled block).

![Associations](/blog/migrations/migrate-associate.webp)

Associations will need to be made between all relevant object types including Activities (emails, calls, tasks, todos etc.).

## File Attachments

Another important part of a serious migration is the migration of file attachments. Ziggy provides a File Attachment block that ensures that files are

- Uploaded to the target system 
- Associations are correctly made to their owning entity
- Set whether the file is public or private

## Flow Organization

Ziggy lets you tag your flows so you can find them easily. You can see below how we have a set of migration flows for dealing with Companies, Contacts, Deals and Line Items.

![Customer Export](/blog/migrations/migrate-organize.webp)

## Flow Orchestration

You can also create Ziggy Flows that are used to Orchestrate the various components or phases of a migration. These let you run individual or groups of flows with a single click without having to navigate to the flows individually.

![Customer Export](/blog/migrations/migrate-commander.webp)


