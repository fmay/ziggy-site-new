
## Ziggy Messaging

Ziggy has messaging processing support for any type of messaging system. We currently support the following.

- MQTT
- Redis Event Strea,
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

## Messaging Configurations

Messaging configurations are managed in teh Ziggy UI.

