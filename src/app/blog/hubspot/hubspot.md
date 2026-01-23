# Hubspot Integrations, Automations and Migrations

Ziggy has a collection of blocks that make integration with 3rd party systems powerful but easy to use - for developers and non-developers.

- easy to use
- highly configurable
- move data in an out of Hubspot.

## Blocks

The following blocks are available. All objects have integrated batching and rate limit protection.

- Read: reads data in batches from any Hubspot object.
- Write: writes data to any HubSpot object - create, update, upsert.
- Get Associations: gets associations between any object types and outputs combined or individual object data.
- Set Associations: sets associations between pairs of HubSpot objects.
- Currency: sets or gets currency exchange rates and other currency information.
- Get Owners: gets HubSpot users with associated metadata.
- Translate Owners: takes email addresses and translates them to HubSpot owner IDs. These can then be used to set ownership.
- Search: performs a HubSpot search using a search object.
- File Attachments: get or set file attachments.

## Examples

Below are some simple flows that illustrate the use of HubSpot blocks. 

### Ziggy flow editor and debugger
Note that building and testing flows is supported by the visual debugger. From the Ziggy UI, you can execute flows, step from block to block and Inspect data anywhere in the flow. 

The screenshot below shows a user stepping through a flow. Clicking on any of the bubbles on the connecting lines shows data at that point.

![Debugger](/blog/hubspot/hubspot-debugger.webp)

## HubSpot Read

This flow shows data being read from HubSpot in two ways. 

- The orange block is configured to read batches of 100 company records.
- The next block upserts this data to a SQL table. Note that there are many other blocks that write data to different destinations (files, API endpoints, ERP systems etc.).
- Note the batch handling that keeps processing 100 records at a time until all data is read.
- A lot of extra intelligence and data transformation handling can be added to flows.

![Hubspot read](/blog/hubspot/hubspot-read.webp)

You can also read individual records using the HubSpot Search block. Alternatively, you can fetch HubSpot records based on the output from a previous flow block.

## AI supported data transformations and validations

Ziggy has several ways of managing data transformations. For many cases, the AI backed Javascript block 

- is a great way of giving developers detailed control, including full code debugging
- yet allows non-developers to generate code, informed by data in the pipeline, that can handle complex transformations and validations.

The following flow builds on the simple HubSpot Read example above to perform another, parallel operations on the read data.

![AI Edge transform](/blog/hubspot/hubspot-read-ai.webp)

First, we create an **AI Edge transformation** that generates background code to transform the data. Note that the use of AI is only at design time, ensuring stability during execution. AI generates code that is stable and never changes.

![AI Edge transform](/blog/hubspot/hubspot-ai-edge-config.webp)

Pressing the **Code** button shows you the generated code. This can optionally be converted into a Javascript block if you need to edit the code directly. 

![ai code](/blog/hubspot/hubspot-edge-ai-code.webp)


## AI supported Javascript block

The Javascript block is used for using Javascript code to perform validations, transformations, making API calls etc. Below shows the above flow with the transformation converted into a Javascript block.

The Javascript block has a full debugger that lets you step through code and inspect local variables.

![javascript block](/blog/hubspot/hubspot-js-block.webp)

## HubSpot Write

This block lets you create, upsert or update records in any HubSpot object. Batching and rate-limit protection are built-in.

Below is a flow that writes (upserts) data from a previously imported data set to the HubSpot deals object. The orange block is all that is needed.

![Hubspot write](/blog/hubspot/hubspot-export-deals.webp)


## Read associated object

If you need to read data from a pair of associated objects, then you use the **HubSpot Read** and **Get Associated Object** blocks. 

The flow below shows how this is configured.

- The first orange block reads the company name property from a batch of 100 records
- The second one on the second row fetches the email address, first name and last name properties for all contacts associated with each of the companies in the fetch batch.

![Associate](/blog/hubspot/hubspot-associate.webp)

The resulting data is output ready for whatever you might want to do next with the data.

![Associate](/blog/hubspot/hubspot-associate-data.webp)

## Update currencies

Below is a simple but useful flow for retrieving all exchange rates from a REST API. It then uses the HubSpot Currency block to set all configured currencies with the up-to-date exchange rates. 

You would probably set up a Ziggy Schedule to launch this flow as often as you require updates.

![Hubspot Currency](/blog/hubspot/hubspot-currency.webp)

Note the use of the AI Edge Data Transformer to convert the data format returned from the API into the correct format for the HubSpot Currency block.

![Hubspot Currency](/blog/hubspot/hubspot-currency-ai.webp)



