"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { ProductList } from "./components/productlist";
import { Categories } from "./components/categories";
import {Testimonials } from "./components/Testimonials";
import {GiveOnRent} from "./components/GiveOnRent";
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <GiveOnRent />
      <Categories />
      <ProductList categoryId={''} />
      <Testimonials />
      <main className="container mx-auto p-4">
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;