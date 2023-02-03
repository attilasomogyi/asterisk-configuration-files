extensions.conf
================

The "extensions.conf" file in Asterisk is a configuration file that controls how incoming calls are handled and processed by the PBX. It contains a series of "contexts", which define sets of rules for handling calls, and "extensions", which are individual steps within those contexts that perform specific actions, such as playing a message, transferring the call to another extension, or dialing out to a PSTN number. The "extensions.conf" file is used to build call flows and determine what happens when a call is received by the PBX.


[general]
----------

The "[general]" section in the extensions.conf file is used to set global options that apply to all extensions in the file. The options specified in the "[general]" section can be overridden by individual extension sections, but if not overridden, will be used as the default for all extensions. In two sentences, "[general]" in extensions.conf sets global options for all extensions in the file, acting as the default for each unless specified otherwise in an individual extension section.

static=yes
~~~~~~~~~~~~

The "static=yes" option in the extensions.conf file determines if an extension is static or dynamic. When "static=yes" is set for an extension, it means that the extension cannot be altered or deleted via the Asterisk Management Interface (AMI) or the Command Line Interface (CLI). A static extension is useful in scenarios where you want to ensure that a specific extension is always available and cannot be accidentally modified. In two sentences, "static=yes" in extensions.conf makes an extension immutable, ensuring it remains unaltered through AMI or CLI changes.

wirteprotect=no
~~~~~~~~~~~~~~~~~~

The "writeprotect=no" option in the extensions.conf file determines if an extension can be modified or not. When "writeprotect=no" is set for an extension, it means that the extension can be altered, added or deleted via the Asterisk Management Interface (AMI) or the Command Line Interface (CLI). In two sentences, "writeprotect=no" in extensions.conf allows an extension to be changed, added, or deleted through AMI or CLI, while "writeprotect=yes" will protect the extension from being modified.

autofallthrough=yes
~~~~~~~~~~~~~~~~~~~~~~

This line tells Asterisk to automatically fall through to the next extension if the current extension does not match the incoming call. For example, if you have an extension that matches incoming calls from a specific phone number, and you have another extension that matches all incoming calls, the second extension will be used if the first extension does not match the incoming call.

[globals]
----------

The "[globals]" section in the extensions.conf file is used to set global variables that can be referenced and used by multiple extensions within the file. These global variables can be accessed and used to dynamically set values or parameters in extensions and dialplan logic. In two sentences, "[globals]" in extensions.conf sets global variables that can be used by multiple extensions within the file to dynamically set values or parameters in dialplan logic.

[from-external]
~~~~~~~~~~~~~~~~~~

[from-external] in extensions.conf is a context that specifies the dialplan logic for incoming calls from the outside or external network. This context typically contains the extensions and dialplan logic that handle incoming calls and determine how they are routed or processed within the PBX system. In two sentences, "[from-external]" in extensions.conf specifies the dialplan logic for incoming calls from the outside network and typically includes the extensions that handle and route these calls within the PBX system.