extensions.conf
================

The **extensions.conf** file in Asterisk is a configuration file that controls how incoming calls are handled and processed by the PBX. It contains a series of *contexts*, which define sets of rules for handling calls, and *extensions*, which are individual steps within those contexts that perform specific actions, such as playing a message, transferring the call to another extension, or dialing out to a PSTN number. The "extensions.conf" file is used to build call flows and determine what happens when a call is received by the PBX.


[general]
----------

The **[general]** section in the *extensions.conf* file is used to set global options that apply to all extensions in the file. The options specified in the **[general]** section can be overridden by individual extension sections, but if not overridden, will be used as the default for all extensions. In two sentences, **[general]** in *extensions.conf* sets global options for all extensions in the file, acting as the default for each unless specified otherwise in an individual extension section.

.. literalinclude:: /../../src/extensions.conf
   :caption: extensions.conf
   :language: ini
   :linenos:
   :lineno-start: 1
   :lines: 1-4

static=yes
~~~~~~~~~~~~

The **static=yes** option in the *extensions.conf* file determines if an extension is static or dynamic. When **static=yes** is set for an extension, it means that the extension cannot be altered or deleted via the Asterisk Management Interface (AMI) or the Command Line Interface (CLI). A static extension is useful in scenarios where you want to ensure that a specific extension is always available and cannot be accidentally modified. In two sentences, **static=yes** in *extensions.conf* makes an extension immutable, ensuring it remains unaltered through AMI or CLI changes.

wirteprotect=no
~~~~~~~~~~~~~~~~~~

The **writeprotect=no** option in the *extensions.conf* file determines if an extension can be modified or not. When **writeprotect=no** is set for an extension, it means that the extension can be altered, added or deleted via the Asterisk Management Interface (AMI) or the Command Line Interface (CLI). In two sentences, **writeprotect=no** in extensions.conf allows an extension to be changed, added, or deleted through AMI or CLI, while *writeprotect=yes* will protect the extension from being modified.

autofallthrough=yes
~~~~~~~~~~~~~~~~~~~~~~

**autofallthrough=yes** in *extensions.conf* determines the behavior of the PBX system when a matching extension is not found for an incoming call. If **autofallthrough** is set to **yes**, the system will automatically fall through to the next priority in the current context in search of a matching extension. In two sentences, **autofallthrough=yes** in *extensions.conf* specifies that the PBX system will automatically continue to the next priority if no matching extension is found, allowing it to search for a match in the current context.

[globals]
----------

The **[globals]** section in the *extensions.conf* file is used to set global variables that can be referenced and used by multiple extensions within the file. These global variables can be accessed and used to dynamically set values or parameters in extensions and dialplan logic. In two sentences, **[globals]** in *extensions.conf* sets global variables that can be used by multiple extensions within the file to dynamically set values or parameters in dialplan logic.

.. literalinclude:: /../../src/extensions.conf
   :caption: extensions.conf
   :language: ini
   :linenos:
   :lineno-start: 6
   :lines: 6-7

[from-external]
------------------

**[from-external]** in *extensions.conf* is a context that specifies the dialplan logic for incoming calls from the outside or external network. This context typically contains the extensions and dialplan logic that handle incoming calls and determine how they are routed or processed within the PBX system. In two sentences, **[from-external]** in *extensions.conf* specifies the dialplan logic for incoming calls from the outside network and typically includes the extensions that handle and route these calls within the PBX system.

.. literalinclude:: /../../src/extensions.conf
   :caption: extensions.conf
   :language: ini
   :linenos:
   :lineno-start: 8
   :lines: 8-19

exten => 201,1,NoOP(${CALLERID})
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In *extensions.conf*, the line **exten => 201,1,NoOP(${CALLERID})** specifies an extension with a priority of 1 that runs the NoOP dialplan application with the argument **${CALLERID}**. This application will simply print the value of the **CALLERID** variable to the console for debugging purposes.

same => n,Ringing
~~~~~~~~~~~~~~~~~~~

**same => n,Ringing** in *extensions.conf* means that if the current extension matches, it will execute the next priority (n) with the "Ringing" application, which generates ringing tone for the caller.

same => n,Queue(clients)
~~~~~~~~~~~~~~~~~~~~~~~~~~

The line **same => n,Queue(clients)** in extensions.conf means that calls to the specified extension will be directed to the specified queue, in this case **clients**. The **same => n** part means that the next priority of the extension will be executed and in this case, it is adding the call to the queue **clients**.

same => n,Answer
~~~~~~~~~~~~~~~~~~

**same => n,Answer** in *extensions.conf* is an Asterisk dialplan application which answers an incoming call and makes it ready to be processed by further dialplan instructions. It is used to start processing an incoming call and put the call into an active state.

same => n,Hangup
~~~~~~~~~~~~~~~~~~

In *extensions.conf*, **same => n,Hangup** is a dialplan application that immediately ends the current call with a hangup message. The "n" represents the current priority number in the dialplan and can be any positive integer. This command terminates the call and releases any used resources.

[from-internal]
------------------

In Asterisk PBX, the section **[from-internal]** in the *extensions.conf* file refers to a context for incoming calls from the internal network or PBX extensions. The extensions and rules defined in this context are applied to calls that originate from within the PBX system. This allows for customization of the PBX behavior for internal calls and provides a way to handle these calls differently from external calls.

.. literalinclude:: /../../src/extensions.conf
   :caption: extensions.conf
   :language: ini
   :linenos:
   :lineno-start: 21
   :lines: 21-51

exten => _0690XXXXXX,1,Hangup/_0681XXXXXX,1,Hangup
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**exten => _0690XXXXXX,1,Hangup/_0681XXXXXX,1,Hangup** in the *extensions.conf* file is a dialplan pattern. It matches outgoing calls that start with the prefix "0690XXXXXX" and immediately hangs up the call by executing the Hangup dialplan application on the first priority (1).

exten => _06[237]0XXXXXXX,1,Ringing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The line **exten => _06[237]0XXXXXXX/_0036[237]0XXXXXXX,1,Ringing** in the extensions.conf file is a dial plan definition. It specifies that when a call is made to a phone number starting with 06 followed by either 2, 3 or 7 and then 7 digits, the Asterisk PBX should play the "Ringing" sound to the caller, indicating that the call is ringing on the recipient's side.

same => 2,Dial(SIP/${EXTEN}\@gsm,60)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**same => 2,Dial(SIP/${EXTEN}\@gsm,60)** in extensions.conf means that it will place a call to the SIP extension defined in the ${EXTEN} variable, with a maximum ring time of 60 seconds, using the SIP dialing syntax "SIP/${EXTEN}@gsm". The "same =>" statement means that the dialing process will continue in the same priority level, with the next step being number 2.

same => 3,GotoIf($[${DIALSTATUS}=CHANUNAVAIL]?:5)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The line **same => 3,GotoIf($[${DIALSTATUS}=CHANUNAVAIL]?:5)** in the extensions.conf file is a conditional branch statement in Asterisk dialplan. It checks if the dial status of the previous step is "CHANUNAVAIL" and if so, jumps to priority step 5. The "same =>" keyword means that this priority step will be executed in the same context as the previous step.

same => 4/7/6, Hangup
~~~~~~~~~~~~~~~~~~~~~~~

The line **same => 4/7/6,Hangup** in the Asterisk dial plan means that if the previous step in the dial plan execution is completed, it will hang up the call by executing the "Hangup" application, which ends the call. The "same" keyword means that the priority of this step is the same as the previous step in the dial plan.

same => 5, Dial(SIP/${EXTEN}\@gsm,60)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The line **same => 5,Dial(SIP/${EXTEN}\@isdn-1,60)** in extensions.conf is a Dial application, which tries to dial a SIP channel using the given extension number, "@isdn-1", as the address and 60 seconds as the maximum duration of the call.

same => 6,GotoIf($[${DIALSTATUS}=CHANUNAVAIL]?:8)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The line **same => 6,GotoIf($[${DIALSTATUS}=CHANUNAVAIL]?:8)?** in the extensions.conf file is a conditional branch in the dialplan. It tests the result of the previous Dial command, which dials the specified destination. If the result of the Dial command is "CHANUNAVAIL" (i.e., the destination is unavailable), the dialplan execution jumps to the next priority level marked as "8".

same => 8,Dial(SIP/${EXTEN}\@isdn-2,60)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**same => 8,Dial(SIP/${EXTEN}\@isdn-2,60)** in extensions.conf refers to a dial plan statement in Asterisk. It specifies that if the previous priority is completed and execution is at priority 8, a call should be made using SIP protocol to the destination number specified by the ${EXTEN} variable at endpoint isdn-2, with a maximum ring time of 60 seconds.

exten => _06XXXXXXXX,1,Ringing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In extensions.conf, the line "exten => _06XXXXXXXX,1,Ringing" defines a dial plan rule. The rule specifies that if an incoming call matches the pattern "_06XXXXXXXX" (i.e. the caller ID starts with "06"), the first action to be taken is to initiate a "Ringing" signal. This signals the intended recipient of the call that there is an incoming call waiting to be answered.