
## Ziggy Messaging

Ziggy has messaging processing support for any type of messaging system. We currently support the following.

- MQTT
- Redis Event Stream
- Redis Pub/Sub
- IMAP (for email processing)

Other messaging protocols are quickly added, so if you require support for another protocol, please [contact us](/contact).


## MQTT

The examples in this article use AWS MQTT. Ziggy also has generic MQTT support. IoT Core has been configured.

## Connections and Secrets

Connections are at the heart of Ziggy. A Connection is a Javascript object that allows all useful parameters to be specified for any system or platform that is being connected to. 

In this case we are interested in the **MQTT AWS** connection type, but the same approach is used for connecting to databases and other platforms. Once created, a connection can be referenced in Ziggy blocks and the messaging configuration.

Below is the connection information for AWS MQTT. 

![Connection](/blog/iot/iot-connection.webp)

Note that the configuration references `secrets.xxxxx`. Ziggy includes a Secrets Manager that stores fully encrypted secrets.

## Messaging Configurations List

Messaging configurations are managed in the Ziggy UI. You can create as may messaging items and you need. 

![IOT List](/blog/iot/iot-messaging-manager.webp)

## Messaging Configuration

Your MQTT messaging can be configured as shown below.

![IOT List](/blog/iot/iot-messaging-config.webp)

- Provide the MQTT connection to use
- Assign permissions to users and teams
- Configure topics to subscribe to and which flow to launch
- Access Logs

Once this is configured, Ziggy will automatically subscribe to the topics you have created and will launch a flow for each message received.

## Flow execution

The message payload will be passed into the flow and flow execution will begin. What your flow does is entirely up to you.

In most cases, your flow can pass data to other systems (platforms, API calls, databases and warehouses etc.). Ziggy's system queue will protect against system overload. You can use Ziggy Cluster to increase overall performance.

If the number of messages received will be very high and the flow performs a complex, slow running operations, you may decide to save the payload data to a data store for processing by a separate, scheduled flow or external process.

## Sending messages to devices

Ziggy can also send messages to devices from a flow. For example, if you update a record in another platform that relates to a device or group of devices, this can trigger a Ziggy flow.

The flow can then send messages using the MQTT Publish block.

<img src="/blog/iot/iot-send.webp" alt="Send message to device" style="max-width: 600px" />

