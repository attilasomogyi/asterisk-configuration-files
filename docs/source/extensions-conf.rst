extensions.conf
================

The "extensions.conf" file is a text file that is read by the Asterisk server when it starts up. It is located in the "/etc/asterisk" directory on the Asterisk server. The file is divided into sections, each of which is enclosed in square brackets. The sections are called "contexts", and each context defines a set of rules for handling calls. The "extensions.conf" file can contain multiple contexts, and each context can contain multiple extensions. The "extensions.conf" file is divided into two sections: the "globals" section and the "contexts" section. The "globals" section contains global variables that are used by all contexts. The "contexts" section contains the actual contexts that define how calls are handled.


[general]
----------

The "general" section contains global variables that are used by all contexts. The "general" section is enclosed in square brackets, and it is located at the top of the "extensions.conf" file.

static=yes
~~~~~~~~~~~~

This line tells Asterisk to read the "extensions.conf" file at startup. If you want to make changes to the file, you must restart Asterisk for the changes to take effect.

wirteprotect=no
~~~~~~~~~~~~~~~~~~

autofallthrough=yes
~~~~~~~~~~~~~~~~~~~~~~

This line tells Asterisk to automatically fall through to the next extension if the current extension does not match the incoming call. For example, if you have an extension that matches incoming calls from a specific phone number, and you have another extension that matches all incoming calls, the second extension will be used if the first extension does not match the incoming call.

[globals]
----------

The "globals" section contains global variables that are used by all contexts. The "globals" section is enclosed in square brackets, and it is located at the top of the "extensions.conf" file.

[from-external]
~~~~~~~~~~~~~~~~~~

This line defines a global variable named "from-external". The variable is used by the "from-external" context, which is defined in the "contexts" section.

exten