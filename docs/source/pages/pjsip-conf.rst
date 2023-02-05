pjsip.conf
=================

pjsip.conf is a configuration file used by PJSIP, a SIP (Session Initiation Protocol) implementation for Voice over IP (VoIP) communication. It contains the settings and options for the PJSIP stack to configure and manage SIP endpoints, such as how to handle incoming and outgoing calls, how to authenticate and secure communication, and how to handle network and media handling.

[global]
-----------------

The "[global]" section in the pjsip.conf configuration file is used to specify default settings that apply to all PJSIP endpoints defined in the configuration file. It provides a way to specify settings that will be used as a baseline for all endpoints and can be overridden by individual endpoint settings.

.. literalinclude:: /../../src/pjsip.conf
   :caption: pjsip.conf
   :language: ini
   :linenos:
   :lineno-start: 1
   :lines: 1-3