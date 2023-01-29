sip.conf
=============

The sip.conf file is a configuration file used in Asterisk, an open-source PBX system. It contains settings for configuring SIP (Session Initiation Protocol) based communication, including settings for SIP users, peers, and trunks, dialplan, and other options.

[general]
-------------------

[general] is the default section for the sip.conf file. It contains settings that apply to all SIP users, peers, and trunks.

.. literalinclude:: /../../src/sip.conf
   :caption: sip.conf
   :language: ini
   :linenos:
   :lineno-start: 1
   :lines: 1-20

disallow=all
~~~~~~~~~~~~~~~~~~~~~~

The "disallow=all" option in the sip.conf file means that all codecs are disallowed for SIP calls except for the codecs explicitly listed in the "allow" option. This means that if you want to allow certain codecs, you need to list them in the "allow" option explicitly after setting "disallow=all" in order to allow codecs, otherwise all codecs will be disabled and calls will not be able to be established.


allow=ulaw
~~~~~~~~~~~~~~~~~~~~~~

The "allow=ulaw" option in the sip.conf file specifies that the ulaw codec is allowed for SIP calls, it means that the ulaw codec is enabled for encoding and decoding audio streams in a VoIP call, any other codecs that are not listed in the allow option will be disallowed.

canreinvite=no
~~~~~~~~~~~~~~~~~~~~~~

"canreinvite=no" in sip.conf prevents the media path of a SIP call from being changed during the call, which improves security but limits certain features. It means that the media will flow directly between the endpoints.

allowguest=no
~~~~~~~~~~~~~~~~~~~~~~

"allowguest=no" is an option in the sip.conf file that controls whether or not anonymous (guest) SIP calls are allowed to be made. When it is set to "no", it means that anonymous SIP calls will be rejected and only authenticated calls will be allowed to be established. This can improve security by only allowing known and authenticated SIP users to make calls.

dtmfmode=rfc2833
~~~~~~~~~~~~~~~~~~~~~~

"dtmfmode=rfc2833" is an option in the sip.conf file that controls how DTMF tones are transmitted during a SIP call. When it is set to "rfc2833", it means that DTMF tones will be sent as out-of-band signals, separate from the audio of the call, using the RFC 2833 standard. This method is more reliable than other methods of sending DTMF tones, and is supported by most SIP devices.

encryption=yes
~~~~~~~~~~~~~~~~~~~~~~

"encryption=yes" is an option in the sip.conf file that controls whether or not the SIP signaling messages are encrypted. When it is set to "yes", it means that the SIP signaling messages will be encrypted for added security. This helps to protect against eavesdropping and tampering of SIP messages and can also help to comply with data privacy regulations.

host=dynamic
~~~~~~~~~~~~~~~~~~~~~~

"host=dynamic" is an option in the sip.conf file that controls how the host name of the SIP server is determined. When it is set to "dynamic", it means that the host name of the SIP server will be determined dynamically, based on the IP address of the server.

nat=no
~~~~~~~~~~~~~~~~~~~~~~

"nat=no" is an option in the sip.conf file that controls whether or not the SIP server is behind a NAT (Network Address Translation) device. When it is set to "no", it means that the SIP server is not behind a NAT device and is directly connected to the Internet.

qualify=yes
~~~~~~~~~~~~~~~~~~~~~~

"qualify=yes" is an option in the sip.conf file that controls whether or not the SIP server will send periodic OPTIONS messages to the SIP peers to check if they are still available. When it is set to "yes", it means that the SIP server will send periodic OPTIONS messages to the SIP peers to check if they are still available.

recordhistory=yes
~~~~~~~~~~~~~~~~~~~~~~

"recordhistory=yes" is an option in the sip.conf file that controls whether or not the SIP server will record the call history of the SIP users. When it is set to "yes", it means that the SIP server will record the call history of the SIP users.

rtp_secure_media=yes
~~~~~~~~~~~~~~~~~~~~~~

"rtp_secure_media=yes" is an option in the sip.conf file that controls whether or not the RTP (Real-time Transport Protocol) media streams are encrypted. When it is set to "yes", it means that the RTP media streams will be encrypted for added security. This helps to protect against eavesdropping and tampering of RTP media streams and can also help to comply with data privacy regulations.

sipdebug=yes
~~~~~~~~~~~~~~~~~~~~~~

"sipdebug=yes" is an option in the sip.conf file that controls whether or not the SIP server will log SIP messages. When it is set to "yes", it means that the SIP server will log SIP messages.

transport=udp
~~~~~~~~~~~~~~~~~~~~~~

"transport=udp" is an option in the sip.conf file that controls the transport protocol that will be used for SIP signaling. When it is set to "udp", it means that the SIP signaling will be sent using the UDP (User Datagram Protocol) transport protocol.

[isdn-1]/[isdn-2]/[gsm]
------------------------

[isdn-1]/[isdn-2]/[gsm] is a section in the sip.conf file that contains settings for a SIP trunk. It contains settings for the SIP trunk, including the SIP trunk name, the SIP trunk type, the SIP trunk username, the SIP trunk password, the SIP trunk host, and other options.

.. literalinclude:: /../../src/sip.conf
   :caption: sip.conf
   :language: ini
   :linenos:
   :lineno-start: 22
   :lines: 22-41

type=friend
~~~~~~~~~~~~~~~~~~~~~~

"type=friend" is an option in the sip.conf file that controls the type of the SIP trunk. When it is set to "friend", it means that the SIP trunk is a peer, which means that the SIP trunk will be authenticated using the SIP trunk username and password.

context=from-external
~~~~~~~~~~~~~~~~~~~~~~

"context=from-external" is an option in the sip.conf file that controls the dialplan context that will be used for the SIP trunk. When it is set to "from-external", it means that the dialplan context that will be used for the SIP trunk is "from-external".

secret=${shared_secret}
~~~~~~~~~~~~~~~~~~~~~~~~

"secret=${shared_secret}" is an option in the sip.conf file that controls the password that will be used to authenticate the SIP trunk. When it is set to "${shared_secret}", it means that the password that will be used to authenticate the SIP trunk is the value of the "shared_secret" variable, which is defined in the sip.conf file.

insecure=port,invite
~~~~~~~~~~~~~~~~~~~~~~

"insecure=port,invite" is an option in the sip.conf file that controls whether or not the SIP trunk will be authenticated. When it is set to "port,invite", it means that the SIP trunk will not be authenticated, which means that the SIP trunk will be able to make calls without authenticating.

permit=${isdn_1_ip}/${isdn_1_ip}/${gsm_ip}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

"permit=${isdn_1_ip}/${isdn_1_ip}/{gsm_ip}" is an option in the sip.conf file that controls the IP address that will be allowed to make calls using the SIP trunk. When it is set to "${isdn_1_ip}/${isdn_2_ip}{gsm_ip}", it means that the IP address that will be allowed to make calls using the SIP trunk is the value of the "isdn_1_ip/isdn_2_ip/gsm_ip" variable, which is defined in the sip.conf file.

[201]
-------

[201] is a section in the extensions.conf file that contains settings for a SIP user. It contains settings for the SIP user, including the SIP user name, the SIP user password, the SIP user context, and other options.

.. literalinclude:: /../../src/sip.conf
   :caption: sip.conf
   :language: ini
   :linenos:
   :lineno-start: 43
   :lines: 43-47

type=friend
~~~~~~~~~~~~~~~~~~~~~~

"type=friend" is an option in the sip.conf file that controls the type of the SIP trunk. When it is set to "friend", it means that the SIP trunk is a peer, which means that the SIP trunk will be authenticated using the SIP trunk username and password.

defaultuser=201
~~~~~~~~~~~~~~~~~

"defaultuser=201" is an option in the sip.conf file that sets a default SIP username to be used when a specific username is not provided. When it is set to "201", it means that any SIP request that does not specify a username will use "201" as the default username. This option can be useful for simplifying the configuration of SIP clients or for providing a default username for incoming calls to a specific extension.

secret=${shared_secret}
~~~~~~~~~~~~~~~~~~~~~~~~

"secret=${shared_secret}" is an option in the sip.conf file that controls the password that will be used to authenticate the SIP user. When it is set to "${shared_secret}", it means that the password that will be used to authenticate the SIP user is the value of the "shared_secret" variable, which is defined in the sip.conf file.

context=from-internal
~~~~~~~~~~~~~~~~~~~~~~

"context=from-internal" is an option in the sip.conf file that controls the dialplan context that will be used for the SIP user. When it is set to "from-internal", it means that the dialplan context that will be used for the SIP user is "from-internal".