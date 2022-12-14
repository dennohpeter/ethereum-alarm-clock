// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ValidationError extends ethereum.Event {
  get params(): ValidationError__Params {
    return new ValidationError__Params(this);
  }
}

export class ValidationError__Params {
  _event: ValidationError;

  constructor(event: ValidationError) {
    this._event = event;
  }

  get error(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Pause extends ethereum.Event {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends ethereum.Event {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class OwnershipRenounced extends ethereum.Event {
  get params(): OwnershipRenounced__Params {
    return new OwnershipRenounced__Params(this);
  }
}

export class OwnershipRenounced__Params {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CloneCreated extends ethereum.Event {
  get params(): CloneCreated__Params {
    return new CloneCreated__Params(this);
  }
}

export class CloneCreated__Params {
  _event: CloneCreated;

  constructor(event: CloneCreated) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get clone(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RequestCreated extends ethereum.Event {
  get params(): RequestCreated__Params {
    return new RequestCreated__Params(this);
  }
}

export class RequestCreated__Params {
  _event: RequestCreated;

  constructor(event: RequestCreated) {
    this._event = event;
  }

  get request(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bucket(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get params(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class RequestFactory extends ethereum.SmartContract {
  static bind(address: Address): RequestFactory {
    return new RequestFactory("RequestFactory", address);
  }

  validateRequestParams(
    _addressArgs: Array<Address>,
    _uintArgs: Array<BigInt>,
    _endowment: BigInt
  ): Array<boolean> {
    let result = super.call(
      "validateRequestParams",
      "validateRequestParams(address[3],uint256[12],uint256):(bool[6])",
      [
        ethereum.Value.fromAddressArray(_addressArgs),
        ethereum.Value.fromUnsignedBigIntArray(_uintArgs),
        ethereum.Value.fromUnsignedBigInt(_endowment)
      ]
    );

    return result[0].toBooleanArray();
  }

  try_validateRequestParams(
    _addressArgs: Array<Address>,
    _uintArgs: Array<BigInt>,
    _endowment: BigInt
  ): ethereum.CallResult<Array<boolean>> {
    let result = super.tryCall(
      "validateRequestParams",
      "validateRequestParams(address[3],uint256[12],uint256):(bool[6])",
      [
        ethereum.Value.fromAddressArray(_addressArgs),
        ethereum.Value.fromUnsignedBigIntArray(_uintArgs),
        ethereum.Value.fromUnsignedBigInt(_endowment)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBooleanArray());
  }

  TIMESTAMP_BUCKET_SIZE(): BigInt {
    let result = super.call(
      "TIMESTAMP_BUCKET_SIZE",
      "TIMESTAMP_BUCKET_SIZE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TIMESTAMP_BUCKET_SIZE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TIMESTAMP_BUCKET_SIZE",
      "TIMESTAMP_BUCKET_SIZE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isKnownRequest(_address: Address): boolean {
    let result = super.call(
      "isKnownRequest",
      "isKnownRequest(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );

    return result[0].toBoolean();
  }

  try_isKnownRequest(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isKnownRequest",
      "isKnownRequest(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transactionRequestCore(): Address {
    let result = super.call(
      "transactionRequestCore",
      "transactionRequestCore():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_transactionRequestCore(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "transactionRequestCore",
      "transactionRequestCore():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBucket(windowStart: BigInt, unit: i32): BigInt {
    let result = super.call("getBucket", "getBucket(uint256,uint8):(int256)", [
      ethereum.Value.fromUnsignedBigInt(windowStart),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(unit))
    ]);

    return result[0].toBigInt();
  }

  try_getBucket(windowStart: BigInt, unit: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBucket",
      "getBucket(uint256,uint8):(int256)",
      [
        ethereum.Value.fromUnsignedBigInt(windowStart),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(unit))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  BLOCKS_BUCKET_SIZE(): BigInt {
    let result = super.call(
      "BLOCKS_BUCKET_SIZE",
      "BLOCKS_BUCKET_SIZE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_BLOCKS_BUCKET_SIZE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BLOCKS_BUCKET_SIZE",
      "BLOCKS_BUCKET_SIZE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class CreateRequestCall extends ethereum.Call {
  get inputs(): CreateRequestCall__Inputs {
    return new CreateRequestCall__Inputs(this);
  }

  get outputs(): CreateRequestCall__Outputs {
    return new CreateRequestCall__Outputs(this);
  }
}

export class CreateRequestCall__Inputs {
  _call: CreateRequestCall;

  constructor(call: CreateRequestCall) {
    this._call = call;
  }

  get _addressArgs(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _uintArgs(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _callData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateRequestCall__Outputs {
  _call: CreateRequestCall;

  constructor(call: CreateRequestCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class CreateValidatedRequestCall extends ethereum.Call {
  get inputs(): CreateValidatedRequestCall__Inputs {
    return new CreateValidatedRequestCall__Inputs(this);
  }

  get outputs(): CreateValidatedRequestCall__Outputs {
    return new CreateValidatedRequestCall__Outputs(this);
  }
}

export class CreateValidatedRequestCall__Inputs {
  _call: CreateValidatedRequestCall;

  constructor(call: CreateValidatedRequestCall) {
    this._call = call;
  }

  get _addressArgs(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _uintArgs(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _callData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateValidatedRequestCall__Outputs {
  _call: CreateValidatedRequestCall;

  constructor(call: CreateValidatedRequestCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _transactionRequestCore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
