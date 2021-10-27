import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { CreateParticipantConnectionRequest, CreateParticipantConnectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateParticipantConnectionCommand,
  serializeAws_restJson1CreateParticipantConnectionCommand,
} from "../protocols/Aws_restJson1";

export interface CreateParticipantConnectionCommandInput extends CreateParticipantConnectionRequest {}
export interface CreateParticipantConnectionCommandOutput
  extends CreateParticipantConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Creates the participant's connection. Note that ParticipantToken is used for invoking
 *             this API instead of ConnectionToken.</p>
 *         <p>The participant token is valid for the lifetime of the participant – until they are
 *             part of a contact.</p>
 *         <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s.
 *             Clients must manually connect to the returned websocket URL and subscribe to the desired
 *             topic. </p>
 *         <p>For chat, you need to publish the following on the established websocket
 *             connection:</p>
 *
 *
 *         <p>
 *             <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code>
 *          </p>
 *
 *         <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
 *             clients need to call this API again to obtain a new websocket URL and perform the same
 *             steps as before.</p>
 *
 *         <note>
 *             <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CreateParticipantConnectionCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CreateParticipantConnectionCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new CreateParticipantConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateParticipantConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantConnectionCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateParticipantConnectionCommand extends $Command<
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateParticipantConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateParticipantConnectionCommandInput, CreateParticipantConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "CreateParticipantConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateParticipantConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateParticipantConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateParticipantConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateParticipantConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateParticipantConnectionCommandOutput> {
    return deserializeAws_restJson1CreateParticipantConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}