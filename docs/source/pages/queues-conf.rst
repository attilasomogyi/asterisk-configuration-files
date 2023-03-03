.. include:: ../metadata.txt

queues.conf
================

queues.conf is a configuration file in Asterisk PBX that defines the properties of call queues. It specifies the members who are part of the queue, the strategy for answering calls, the behavior of calls that are not answered, and the settings for call monitoring.

[clients]
-----------

**[clients]** in queues.conf refers to the name of a queue in Asterisk PBX. A queue is a list of incoming calls that are waiting to be answered by agents. The name inside the square brackets specifies the identifier of the queue, and the rest of the configuration details for this queue are specified below this line in the same file.

.. literalinclude:: /../../src/queues.conf
   :caption: queues.conf
   :language: ini
   :linenos:
   :lineno-start: 1
   :lines: 1-7

timeout = 15
~~~~~~~~~~~~~~

The timeout parameter in queues.conf specifies the number of seconds that a caller should wait in a queue before they are disconnected or moved to the next step in the queue. In this example, a caller will wait for 15 seconds before they are disconnected or moved to the next step.

retry = 3
~~~~~~~~~~~

In the Asterisk PBX configuration file queues.conf, the "retry" option specifies the number of times a call should be attempted again if it is unanswered or if the call is connected but then disconnected before it can be answered by an agent. The value of "retry" determines how many additional attempts will be made to reach an agent before the call is terminated.

wrapuptime = 1000
~~~~~~~~~~~~~~~~~~~

**wrapuptime = 1000** in the queues.conf file sets the amount of time, in milliseconds, after a call is completed before an agent is available to take another call. This time can be used for the agent to wrap up any notes or after-call tasks.

strategy = ringall
~~~~~~~~~~~~~~~~~~~~

**strategy = ringall** in queues.conf refers to the way that calls are distributed to members of a queue in an Asterisk PBX. "ringall" strategy means that all available queue members will ring simultaneously until one of them answers the call.


member => SIP/201 and member => SIP/202
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In queues.conf, the line *member => sip/201 and member => sip/202* specifies two members (sip/201 and sip/202) that belong to a queue. The members are responsible for handling calls in the queue, with calls being distributed among them based on the queue strategy specified in the configuration.
