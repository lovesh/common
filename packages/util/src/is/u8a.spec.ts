// Copyright 2017-2020 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a } from '.';

describe('isUint8Array', (): void => {
  it('returns false on undefined values', (): void => {
    expect(
      isU8a()
    ).toEqual(false);
  });

  it('returns false on Array values', (): void => {
    expect(
      isU8a([])
    ).toEqual(false);
  });

  it('returns true on Uint8Array values', (): void => {
    expect(
      isU8a(new Uint8Array())
    ).toEqual(true);
  });
});
