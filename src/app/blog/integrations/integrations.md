# Integrations & Automations

At a high level, they are related, but not the same.

- an integration is about connecting systems and sharing data
- an automation is about executing logic and actions when something happens.

## Requirements

The following things are often important for robust integrations.

- **Security**: Sensitive data is often being moved between systems. You should have full control of how and whether the data is persisted both in transit and at rest.
- **Performance**: Integrations may work fine in the early stages. They also need to scale in order to deal with bursts. There should be in-built protection against system overload and ideally a cluster option to scale raw performance.
- **Auditing and Alerting**: It is important to be able to audit and identify failed executions. How do the right people get notified when automations fail? 
- **Debugging**: Debugging in the development phase is easy enough. When in production, however, it is important that you have at least a detailed error log but preferably the associated data that led to the failure.
- **Rate Limiting**: You will often need ways of protecting your own APIs and ensuring that 3rd party rate limits are not exceeded.
- **Scheduling**: Some integrations will require periodic, scheduled execution. Having a flexible mechanism for defining and updating these is useful.

## Integration

An integration establishes a technical connection between two or more systems so they can exchange data.

### Characteristics

- Focuses on connectivity and data sync
- Often bi-directional
- Can be real-time or scheduled. For example, you might want to perform an hourly update of your ERP system by reading records from an SFTP server.
- Usually limited business logic

## Automation

An automation uses triggers, rules, and actions to orchestrate workflows across one or more systems.

### Examples

- When a deal reaches “Closed Won,” send a Slack message and create a task.
- When a contact is updated, enrich data and notify sales.
- When an invoice is generated in an ERP system, synchronize with the corresponding CRM record.
- When a CRM Deal is created or modified, synchronize with your data warehouse.
- If a record is updated in a Postgres database, update your CRM/ERP system.
- If a record changes in your CRM/ERP, upsert data to a database.

### Characteristics

- Event-driven 
- Often one-directional
- Encodes business rules and logic
- Can include delays, branching, and transformations

### Common triggering events
There are many possible triggering events. For example

- Webhook
- API call
- Messaging Event (MQTT, Redis Event Stream or Pub/Sub, Queue message, IMAP message, SNS, Event Grid etc.)
- Database change events (Debezium, CDC platforms etc.)

## Using Ziggy for Automations and Integrations

Ziggy has several ways to run automations and integrations. Flows can be triggered in several ways. You choose the most appropriate method for each use-case.

### Launch flow manually

You can edit, run and debug any Ziggy Flow from the UI. 

- Migrations would usually be launched manually.
- When you need to run a flow on demand rather than wait for a triggering event.

![Manual launch](/blog/integrations/integration-manual.webp)

### Webhooks

A common way to trigger a flow is using webhooks in your source system. Many platforms allow you to configure webhooks that make an API call (see below) when certain events happen. Below is a Flow that is triggered when a CRM record changes.

The flow is able to process multiple events in a single call. It can then use a **Conditional Subflow** block or a **Javascript** block to branch to subflows to handle different data type scenarios.

![webhook receiver flow](/blog/integrations/integration-webhook-receover.webp)

### API Calls

A Flow can be launched using an API call in conjunction with a private execution key.

![api call](/blog/integrations/integration-postman.webp)

### Messaging

Ziggy has support for different types of Messaging systems and protocols.

Below is an example configuration for an Internet of Things setup that lets you receive messages from Devices. There is also a Ziggy block for sending messages using the MQTT protocol.

Ziggy Cluster ensures processing of very large numbers of messages. When a message is received, a flow is triggered depending on the

![messaging](/blog/integrations/integration-messaging.webp)

### CLI

A Flow can be launched from the Ziggy CLI.

```shell
ziggy flow execute -s org_name -f 4fa6df15-206a-4a62-8646-b7415b556b49 -dnq
```

### Production Auditing and Debugging

Ziggy has an audit log of executed flows.

![history error](/blog/integrations/integration-error-history.webp)

For errored executions, like the one above, you can open the flow and see both the data and the error message. You always have full control over when (and if) data persists in the Ziggy database.

![history error](/blog/integrations/integration-error-flow.webp)

### Rate Limit protection

There are several mechanisms for protecting against rate-limit overruns. Ziggy Blocks, such as the HubSpot collection, have in-built protection. 

You can also manage user-defined queues that pause execution when overruns occur.

## System Level Protection

Ziggy has and in-built queueing mechanism that protects against system overload. By default, all flows are placed in a system queue. You can configure the number of simultaneous flows that can execute. If this limit is exceeded, flow execution is queued until there is available capacity.