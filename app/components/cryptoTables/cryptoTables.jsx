"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./tableStyling.css";
import avalanche from "@/public/assets/icons/avalanche.svg";
import arbitrum from "@/public/assets/icons/arbitrum.svg";
import Link from "next/link";
import { useCryptoData } from "@/app/context/CryptoDataContext";

const CryptoPreviewTables = () => {
  const { poolsData, loading } = useCryptoData();

  // Extract data from 'avalanche'
  const avalancheData = poolsData.avalanche.filter(
    (item) =>
      item.symbol === "ETH" || item.symbol === "USDT" || item.symbol === "AVAX"
  );

  // Extract data from 'arbitrum'
  const arbitrumData = poolsData.arbitrum.filter(
    (item) =>
      item.symbol === "ETH" || item.symbol === "USDC" || item.symbol === "BTC"
  );

  return (
    <div className="flex flex-col gap-10 ">
      {/* 1 box */}
      <div className="coloredBoxBorder max-w-[340px]">
        <div className="deltaWhiteLinearBG rounded-[30px] px-4 pb-1 pt-4 md:px-8 md:pb-2 md:pt-8 max-w-[340px]">
          <div className="flex flex-row items-center justify-start gap-3">
            <h4 className="text-black mb-[10px] font-bold">Avalanche</h4>
            <Image
              src={avalanche}
              width={20}
              height={20}
              alt="avalanche_logo"
              className="mb-2"
            />
          </div>
          {/* Headers */}
          <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-1 px-4 justify-between">
            <p className="text-[#3d3a3a] font-semibold text-nowrap text-[10px]">
              Asset
            </p>
            <p className="text-[#696969] font-semibold text-nowrap text-[10px]">
              Pool Size
            </p>
            <p className="text-[#696969] font-semibold text-nowrap text-[10px] pr-1">
              APY
            </p>
          </div>
          {/* custom table */}
          {/* row */}
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div>
              {avalancheData.map((pool) => (
                <React.Fragment key={pool.symbol}>
                  <div className="flex flex-row justify-between px-4">
                    <div>
                      <p className="text-black text-[11px] pt-3 font-medium">
                        {pool.symbol}
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-[11px] pt-3 font-medium">
                        {pool.formattedTotalSupply}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#00BF68] text-[11px] pt-3 font-medium">
                        {pool.apy.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-1 mt-[12px] bg-gradient-to-r from-[#dfe0ff] from-40% via-[#ffe1c2] via-60% to-[#ffd3e0] to-70%"></div>
                </React.Fragment>
              ))}
              <div className="text-end mt-2">
                <Link
                  href="/#"
                  className="text-[#808080] font-medium mt-1 text-[11px]"
                >
                  ... and more
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 1 box */}
      <div className="coloredBoxBorder max-w-[340px]">
        <div className="deltaWhiteLinearBG rounded-[30px] px-4 pb-1 pt-4 md:px-8 md:pb-2 md:pt-8 max-w-[340px]">
          <div className="flex flex-row items-center justify-start gap-3">
            <h4 className="text-black mb-[10px] font-bold">Arbitrum</h4>
            <Image
              src={arbitrum}
              width={20}
              height={20}
              alt="arbitrum_logo"
              className="mb-2"
            />
          </div>
          {/* Headers */}
          <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-1 px-4 justify-between">
            <p className="text-[#3d3a3a] font-semibold text-nowrap text-[10px]">
              Asset
            </p>
            <p className="text-[#696969] font-semibold text-nowrap text-[10px]">
              Pool Size
            </p>
            <p className="text-[#696969] font-semibold text-nowrap text-[10px] pr-1">
              APY
            </p>
          </div>
          {/* custom table */}
          {/* row */}
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div>
              {arbitrumData.map((pool) => (
                <React.Fragment key={pool.symbol}>
                  <div className="flex flex-row justify-between px-4">
                    <div>
                      <p className="text-black text-[11px] pt-3 font-medium">
                        {pool.symbol}
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-[11px] pt-3 font-medium">
                        {pool.formattedTotalSupply}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#00BF68] text-[11px] pt-3 font-medium">
                        {pool.apy.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-1 mt-[12px] bg-gradient-to-r from-[#dfe0ff] from-40% via-[#ffe1c2] via-60% to-[#ffd3e0] to-70% "></div>
                </React.Fragment>
              ))}
              <div className="text-end mt-2">
                <Link
                  href="/#"
                  className="text-[#808080] font-medium mt-1 text-[11px]"
                >
                  ... and more
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoPreviewTables;

export const CryptoLandingPageTables = () => {
  const { poolsData, loading } = useCryptoData();

  // Extract data from 'avalanche'
  const avalancheData = poolsData.avalanche.filter(
    (item) =>
      item.symbol === "ETH" || item.symbol === "USDT" || item.symbol === "AVAX"
  );

  // Extract data from 'arbitrum'
  const arbitrumData = poolsData.arbitrum.filter(
    (item) =>
      item.symbol === "ETH" || item.symbol === "USDC" || item.symbol === "BTC"
  );

  return (
    <div className="w-full h-full">
      <div className="flex justify-end items-end w-full">
        <div className="w-1/2">
          <div className="coloredBoxBorder">
            <div className="deltaWhiteLinearBG rounded-[30px] px-4 py-5 ">
              <div className="flex flex-row items-center justify-start gap-3">
                <h4 className="text-black mb-[10px] font-bold">Arbitrum</h4>
                <Image
                  src={arbitrum}
                  width={20}
                  height={20}
                  alt="arbitrum_logo"
                  className="mb-2"
                />
              </div>
              {/* Headers */}
              <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-1 px-4 justify-between">
                <p className="text-[#3d3a3a] font-semibold text-nowrap text-[10px]">
                  Asset
                </p>
                <p className="text-[#696969] font-semibold text-nowrap text-[10px]">
                  Pool Size
                </p>
                <p className="text-[#696969] font-semibold text-nowrap text-[10px] pr-1">
                  APY
                </p>
              </div>
              {/* custom table */}
              {/* row */}
              {loading ? (
                <div className="loader"></div>
              ) : (
                <div>
                  {arbitrumData.map((pool) => (
                    <React.Fragment key={pool.symbol}>
                      <div className="flex flex-row justify-between px-4">
                        <div>
                          <p className="text-black text-[11px] pt-3 font-medium">
                            {pool.symbol}
                          </p>
                        </div>
                        <div>
                          <p className="text-black text-[11px] pt-3 font-medium">
                            {pool.formattedTotalSupply}
                          </p>
                        </div>
                        <div>
                          <p className="text-[#00BF68] text-[11px] pt-3 font-medium">
                            {pool.apy.toFixed(1)}%
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-1 mt-[12px] bg-gradient-to-r from-[#dfe0ff] from-40% via-[#ffe1c2] via-60% to-[#ffd3e0] to-70% "></div>
                    </React.Fragment>
                  ))}
                  <div className="text-end mt-2">
                    <Link
                      href="/#"
                      className="text-[#808080] font-medium mt-1 text-[11px]"
                    >
                      ... and more
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/2 -ml-6">
          <div className="coloredBoxBorder">
            <div className="deltaWhiteLinearBG rounded-[30px] px-4 py-5 ">
              <div className="flex flex-row items-center justify-start gap-3">
                <h4 className="text-black mb-[10px] font-bold">Avalanche</h4>
                <Image
                  src={avalanche}
                  width={20}
                  height={20}
                  alt="avalanche_logo"
                  className="mb-2"
                />
              </div>
              {/* Headers */}
              <div className="rounded-[80px] bg-[#FBFAFF] border-[2px] border-[#EAEBFF] flex flex-row py-1 px-4 justify-between">
                <p className="text-[#3d3a3a] font-semibold text-nowrap text-[10px]">
                  Asset
                </p>
                <p className="text-[#696969] font-semibold text-nowrap text-[10px]">
                  Pool Size
                </p>
                <p className="text-[#696969] font-semibold text-nowrap text-[10px] pr-1">
                  APY
                </p>
              </div>
              {/* custom table */}
              {/* row */}
              {loading ? (
                <div className="loader"></div>
              ) : (
                <div>
                  {avalancheData.map((pool) => (
                    <React.Fragment key={pool.symbol}>
                      <div className="flex flex-row justify-between px-4">
                        <div>
                          <p className="text-black text-[11px] pt-3 font-medium">
                            {pool.symbol}
                          </p>
                        </div>
                        <div>
                          <p className="text-black text-[11px] pt-3 font-medium">
                            {pool.formattedTotalSupply}
                          </p>
                        </div>
                        <div>
                          <p className="text-[#00BF68] text-[11px] pt-3 font-medium">
                            {pool.apy.toFixed(1)}%
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-1 mt-[12px] bg-gradient-to-r from-[#dfe0ff] from-40% via-[#ffe1c2] via-60% to-[#ffd3e0] to-70% "></div>
                    </React.Fragment>
                  ))}
                  <div className="text-end mt-2">
                    <Link
                      href="/#"
                      className="text-[#808080] font-medium mt-1 text-[11px]"
                    >
                      ... and more
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
