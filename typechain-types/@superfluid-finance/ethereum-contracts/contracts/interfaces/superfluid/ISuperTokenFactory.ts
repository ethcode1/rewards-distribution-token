/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export interface ISuperTokenFactoryInterface extends utils.Interface {
  functions: {
    "createERC20Wrapper(address,uint8,string,string)": FunctionFragment;
    "createERC20Wrapper(address,uint8,uint8,string,string)": FunctionFragment;
    "getHost()": FunctionFragment;
    "getSuperTokenLogic()": FunctionFragment;
    "initialize()": FunctionFragment;
    "initializeCustomSuperToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createERC20Wrapper(address,uint8,string,string)"
      | "createERC20Wrapper(address,uint8,uint8,string,string)"
      | "getHost"
      | "getSuperTokenLogic"
      | "initialize"
      | "initializeCustomSuperToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createERC20Wrapper(address,uint8,string,string)",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)",
    values: [string, BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSuperTokenLogic",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeCustomSuperToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createERC20Wrapper(address,uint8,string,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSuperTokenLogic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeCustomSuperToken",
    data: BytesLike
  ): Result;

  events: {
    "CustomSuperTokenCreated(address)": EventFragment;
    "SuperTokenCreated(address)": EventFragment;
    "SuperTokenLogicCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CustomSuperTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SuperTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SuperTokenLogicCreated"): EventFragment;
}

export interface CustomSuperTokenCreatedEventObject {
  token: string;
}
export type CustomSuperTokenCreatedEvent = TypedEvent<
  [string],
  CustomSuperTokenCreatedEventObject
>;

export type CustomSuperTokenCreatedEventFilter =
  TypedEventFilter<CustomSuperTokenCreatedEvent>;

export interface SuperTokenCreatedEventObject {
  token: string;
}
export type SuperTokenCreatedEvent = TypedEvent<
  [string],
  SuperTokenCreatedEventObject
>;

export type SuperTokenCreatedEventFilter =
  TypedEventFilter<SuperTokenCreatedEvent>;

export interface SuperTokenLogicCreatedEventObject {
  tokenLogic: string;
}
export type SuperTokenLogicCreatedEvent = TypedEvent<
  [string],
  SuperTokenLogicCreatedEventObject
>;

export type SuperTokenLogicCreatedEventFilter =
  TypedEventFilter<SuperTokenLogicCreatedEvent>;

export interface ISuperTokenFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISuperTokenFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getHost(overrides?: CallOverrides): Promise<[string] & { host: string }>;

    getSuperTokenLogic(
      overrides?: CallOverrides
    ): Promise<[string] & { superToken: string }>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "createERC20Wrapper(address,uint8,string,string)"(
    underlyingToken: string,
    upgradability: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createERC20Wrapper(address,uint8,uint8,string,string)"(
    underlyingToken: string,
    underlyingDecimals: BigNumberish,
    upgradability: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getHost(overrides?: CallOverrides): Promise<string>;

  getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeCustomSuperToken(
    customSuperTokenProxy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getHost(overrides?: CallOverrides): Promise<string>;

    getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CustomSuperTokenCreated(address)"(
      token?: string | null
    ): CustomSuperTokenCreatedEventFilter;
    CustomSuperTokenCreated(
      token?: string | null
    ): CustomSuperTokenCreatedEventFilter;

    "SuperTokenCreated(address)"(
      token?: string | null
    ): SuperTokenCreatedEventFilter;
    SuperTokenCreated(token?: string | null): SuperTokenCreatedEventFilter;

    "SuperTokenLogicCreated(address)"(
      tokenLogic?: string | null
    ): SuperTokenLogicCreatedEventFilter;
    SuperTokenLogicCreated(
      tokenLogic?: string | null
    ): SuperTokenLogicCreatedEventFilter;
  };

  estimateGas: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getHost(overrides?: CallOverrides): Promise<BigNumber>;

    getSuperTokenLogic(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "createERC20Wrapper(address,uint8,string,string)"(
      underlyingToken: string,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createERC20Wrapper(address,uint8,uint8,string,string)"(
      underlyingToken: string,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSuperTokenLogic(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeCustomSuperToken(
      customSuperTokenProxy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}