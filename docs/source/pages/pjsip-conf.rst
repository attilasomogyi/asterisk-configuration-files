pjsip.conf
=================

**pjsip.conf** is a configuration file used by PJSIP, a SIP (Session Initiation Protocol) implementation for Voice over IP (VoIP) communication. It contains the settings and options for the PJSIP stack to configure and manage SIP endpoints, such as how to handle incoming and outgoing calls, how to authenticate and secure communication, and how to handle network and media handling.

[global]
-----------------

The **[global]** section in the *pjsip.conf* configuration file is used to specify default settings that apply to all PJSIP endpoints defined in the configuration file. It provides a way to specify settings that will be used as a baseline for all endpoints and can be overridden by individual endpoint settings.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 1
   :lines: 1-3

type = global
~~~~~~~~~~~~~~ 

In PJSIP, **type = global** under the *[global]* section of the pjsip.conf file specifies that the configuration block following the line is a global configuration block. The options specified in this block will be applied globally to all PJSIP endpoints and transactions.

debug = yes
~~~~~~~~~~~~~~

The **debug = yes** option under the *[global]* section of the pjsip.conf file specifies that PJSIP should log debug messages to the Asterisk log file. This option is useful for debugging PJSIP issues.

[transport-udp]
-----------------

In the PJSIP configuration file, the **[transport-udp]** section specifies the configuration options for the UDP transport layer used for sending and receiving SIP messages in a PJSIP-based communication system. It determines the properties of the UDP transport such as the local address and port to bind to, and the type of the messages that will be sent over the UDP transport.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 5
   :lines: 5-8

type = transport
~~~~~~~~~~~~~~~~~~~

In PJSIP, **type = transport** under the *[transport-udp]* section of the pjsip.conf file specifies that the configuration block following the line is a transport configuration block. The options specified in this block will be applied to the transport layer.

protocol = udp
~~~~~~~~~~~~~~~~~~~

The **protocol = udp** option under the *[transport-udp]* section of the pjsip.conf file specifies that the transport layer should use the UDP protocol for sending and receiving SIP messages.

bind = 0.0.0.0
~~~~~~~~~~~~~~~~~~~

The **bind = 0.0.0.0 **option under the *[transport-udp]* section of the pjsip.conf file specifies that the transport layer should bind to all available network interfaces on the system.

[default-password](!)
----------------------

In PJSIP configuration file, **[default-password](!)** section is used to specify the default password for PJSIP endpoints created within the scope of the current configuration file, which can be overridden by individual endpoint authentication credentials. The "!" symbol means the section is only used for reference and its content cannot be modified.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 10
   :lines: 10-13

type = auth
~~~~~~~~~~~~~~

In PJSIP, **type = auth** under the *[default-password]* section of the pjsip.conf file specifies that the configuration block following the line is an authentication configuration block. The options specified in this block will be applied to the authentication layer.

auth_type = userpass
~~~~~~~~~~~~~~~~~~~~~~~

The **auth_type = userpass** option under the *[default-password]* section of the pjsip.conf file specifies that the authentication layer should use the userpass authentication type for authenticating PJSIP endpoints.

password = important-change-password-at-first-use
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **password = important-change-at-first-use** option under the *[default-password]* section of the pjsip.conf file specifies the default password for PJSIP endpoints created within the scope of the current configuration file. This password can be overridden by individual endpoint authentication credentials.

[default-from-external](!)
----------------------------

In the context of a pjsip.conf file, **[default-from-external](!)** is a section header that defines the default behavior for incoming SIP messages from external sources. It sets the default parameters for authentication, authorization, encryption, and other settings for incoming SIP messages from external sources.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 15
   :lines: 15-21

type = endpoint
~~~~~~~~~~~~~~~~~~

In PJSIP, **type = endpoint** under the *[default-from-external]* section of the pjsip.conf file specifies that the configuration block following the line is an endpoint configuration block. The options specified in this block will be applied to the endpoint layer.

context = from-external
~~~~~~~~~~~~~~~~~~~~~~~~~~

The **context = from-external** option under the *[default-from-external]* section of the pjsip.conf file specifies the context to use for incoming calls from external sources.

dtmf_mode = rfc4733
~~~~~~~~~~~~~~~~~~~~~~

The **dtmf_mode = rfc4733** option under the *[default-from-external]* section of the pjsip.conf file specifies that the endpoint should use RFC 4733 for sending and receiving DTMF tones.

disallow = all
~~~~~~~~~~~~~~~~

The **disallow = all** option under the *[default-from-external]* section of the pjsip.conf file specifies that the endpoint should not allow any codecs for incoming calls from external sources.

allow = ulaw
~~~~~~~~~~~~~~

The **allow = ulaw** option under the *[default-from-external]* section of the pjsip.conf file specifies that the endpoint should allow the ulaw codec for incoming calls from external sources.

direct_media = no
~~~~~~~~~~~~~~~~~~~

The **direct_media = no** option under the *[default-from-external]* section of the pjsip.conf file specifies that the endpoint should not use direct media for incoming calls from external sources.

[default-from-internal](!)

In the context of a pjsip.conf file, **[default-from-internal](!)** is a section header that defines the default behavior for incoming SIP messages from internal sources. It sets the default parameters for authentication, authorization, encryption, and other settings for incoming SIP messages from internal sources.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 23
   :lines: 23-29

type = endpoint
~~~~~~~~~~~~~~~~~~

In PJSIP, **type = endpoint** under the *[default-from-internal]* section of the pjsip.conf file specifies that the configuration block following the line is an endpoint configuration block. The options specified in this block will be applied to the endpoint layer.

context = from-internal
~~~~~~~~~~~~~~~~~~~~~~~~~~

The **context = from-internal** option under the *[default-from-internal]* section of the pjsip.conf file specifies the context to use for incoming calls from internal sources.

dtmf_mode = rfc4733

The **dtmf_mode = rfc4733** option under the *[default-from-internal]* section of the pjsip.conf file specifies that the endpoint should use RFC 4733 for sending and receiving DTMF tones.

disallow = all
~~~~~~~~~~~~~~~~

The **disallow = all** option under the *[default-from-internal]* section of the pjsip.conf file specifies that the endpoint should not allow any codecs for incoming calls from internal sources.

allow = ulaw
~~~~~~~~~~~~~~

The **allow = ulaw** option under the *[default-from-internal]* section of the pjsip.conf file specifies that the endpoint should allow the ulaw codec for incoming calls from internal sources.

direct_media = no

The **direct_media = no** option under the *[default-from-internal]* section of the pjsip.conf file specifies that the endpoint should not use direct media for incoming calls from internal sources.

[default-aors](!)
------------------

**[default-aors](!)** in *pjsip.conf* refers to a default set of "Address Of Record" (AOR) configurations. An AOR is a unique identifier for a SIP endpoint or user, and the default-aors section sets up the common options for all AORs defined in the system.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 31
   :lines: 31-33
