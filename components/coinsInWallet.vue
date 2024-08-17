<template>
  <div>
    <p class="text-slate-400 font-bold text-sm pl-4 mt-6">Mercado Cripto</p>
 <!-- Indicador de carregamento local -->
 <p v-if="pending" class="text-slate-500">Carregando dados...</p>

<!-- Mensagem de erro -->
<p v-if="error" class="text-red-500">Falha ao carregar dados das criptomoedas. Por favor, tente novamente mais tarde.</p>
    <!-- Criptomoedas -->

    <div class="grid grid-cols-5 gap-4 p-4 items-center text-slate-500">
      <p>Simbolo</p>
      <p class="hidden md:block" >Nome</p>
      <p>24hrs</p>
      <p>7 dias</p>
      <p>Valor Atual</p>
      </div>
    <div v-for="(crypto, index) in cryptoData" :key="index">
      <ul>
        <li>
          <div  class="grid grid-cols-5 gap-4 p-4 items-center cursor-pointer transition-all duration-300 hover:bg-slate-800">
            <p class="border-b-2 border-yellow-400 w-6">{{ crypto.symbol }}</p>
            <p class="hidden md:block">{{ crypto.name }}</p>
            <p :class="crypto.percent_change_24h > 0 ? 'text-green-500' : crypto.percent_change_24h < 0 ? 'text-red-500' : ''">
              {{ crypto.percent_change_24h + '%' }}
            </p>
            
            <p :class="crypto.percent_change_7d > 0 ? 'text-green-500' : crypto.percent_change_7d < 0 ? 'text-red-500' : ''">
              {{ crypto.percent_change_7d + '%' }}
            </p>
            
            <p class="text-slate-100 font-semibold">
              {{ formatCurrency(crypto.price_usd * dolarValue?.bid) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useCryptoData } from '@/composables/useCryptoData';

import { useDolarCoin } from '@/composables/useDolarCoin';
import useCurrency from '@/composables/useCurrency';

const { data: cryptoData,  pending, error, refresh } = await useCryptoData();
const { formatCurrency } = useCurrency();
const { dolarValue } = useDolarCoin();
</script>
