import {
  CloneCreated,
  RequestCreated,
} from "../generated/RequestFactory/RequestFactory";
import { CreatedRequest as RequestCreatedEntity } from "../generated/schema";

export function handleCloneCreated(event: CloneCreated): void {}

export function handleRequestCreated(event: RequestCreated): void {
  let entity = RequestCreatedEntity.load(event.transaction.hash.toHex());

  if (!entity) {
    entity = new RequestCreatedEntity(event.transaction.hash.toHex());

    // let { request, owner, bucket, params } = event.params;
    entity.request = event.params.request;
    entity.owner = event.params.owner;
    entity.bucket = event.params.bucket;

    entity.fee = event.params.params[0];
    entity.bounty = event.params.params[1];
    entity.claimWindowSize = event.params.params[2];
    entity.freezePeriod = event.params.params[3];
    entity.reservedWindowSize = event.params.params[4];
    entity.temporalUnit = event.params.params[5];
    entity.windowSize = event.params.params[6];
    entity.windowStart = event.params.params[7];
    entity.callGas = event.params.params[8];
    entity.callValue = event.params.params[9];
    entity.gasPrice = event.params.params[10];
    entity.requiredDeposit = event.params.params[11];
  }
  entity.save();
}
