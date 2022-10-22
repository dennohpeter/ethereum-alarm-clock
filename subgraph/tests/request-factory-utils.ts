import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ValidationError,
  Pause,
  Unpause,
  OwnershipRenounced,
  OwnershipTransferred,
  CloneCreated,
  RequestCreated
} from "../generated/RequestFactory/RequestFactory"

export function createValidationErrorEvent(error: i32): ValidationError {
  let validationErrorEvent = changetype<ValidationError>(newMockEvent())

  validationErrorEvent.parameters = new Array()

  validationErrorEvent.parameters.push(
    new ethereum.EventParam(
      "error",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(error))
    )
  )

  return validationErrorEvent
}

export function createPauseEvent(): Pause {
  let pauseEvent = changetype<Pause>(newMockEvent())

  pauseEvent.parameters = new Array()

  return pauseEvent
}

export function createUnpauseEvent(): Unpause {
  let unpauseEvent = changetype<Unpause>(newMockEvent())

  unpauseEvent.parameters = new Array()

  return unpauseEvent
}

export function createOwnershipRenouncedEvent(
  previousOwner: Address
): OwnershipRenounced {
  let ownershipRenouncedEvent = changetype<OwnershipRenounced>(newMockEvent())

  ownershipRenouncedEvent.parameters = new Array()

  ownershipRenouncedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )

  return ownershipRenouncedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createCloneCreatedEvent(
  target: Address,
  clone: Address
): CloneCreated {
  let cloneCreatedEvent = changetype<CloneCreated>(newMockEvent())

  cloneCreatedEvent.parameters = new Array()

  cloneCreatedEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  cloneCreatedEvent.parameters.push(
    new ethereum.EventParam("clone", ethereum.Value.fromAddress(clone))
  )

  return cloneCreatedEvent
}

export function createRequestCreatedEvent(
  request: Address,
  owner: Address,
  bucket: BigInt,
  params: Array<BigInt>
): RequestCreated {
  let requestCreatedEvent = changetype<RequestCreated>(newMockEvent())

  requestCreatedEvent.parameters = new Array()

  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("request", ethereum.Value.fromAddress(request))
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("bucket", ethereum.Value.fromSignedBigInt(bucket))
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "params",
      ethereum.Value.fromUnsignedBigIntArray(params)
    )
  )

  return requestCreatedEvent
}
