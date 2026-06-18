'use client';

import { useState } from 'react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'hosts' | 'artists'>('hosts');

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <span className="label">How It Works</span>
        <h2 className="sec-title">Simple steps,<br/>unforgettable results</h2>
        <div className="hiw-tabs">
          <button 
            className={`hiw-tab ${activeTab === 'hosts' ? 'active' : ''}`} 
            onClick={() => setActiveTab('hosts')}
          >
            For Hosts
          </button>
          <button 
            className={`hiw-tab ${activeTab === 'artists' ? 'active' : ''}`} 
            onClick={() => setActiveTab('artists')}
          >
            For Artists & Pros
          </button>
        </div>
        
        {activeTab === 'hosts' && (
          <div className="hiw-flow active steps-grid">
            <div className="step">
              <div className="step-num">1</div><h3 className="step-title">Post Your Gig</h3>
              <p className="step-desc">Describe your event — the vibe, date, venue, and budget. Go live in under five minutes.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div><h3 className="step-title">Receive Applications</h3>
              <p className="step-desc">Verified artists apply directly. Review profiles, portfolios, and ratings at a glance.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div><h3 className="step-title">Invite Who You Want</h3>
              <p className="step-desc">Spotted the perfect artist? Send a personal invite they can accept with one tap.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div><h3 className="step-title">Book & Manage</h3>
              <p className="step-desc">Confirm bookings and coordinate via in-app messaging — your entire lineup in one place.</p>
            </div>
          </div>
        )}

        {activeTab === 'artists' && (
          <div className="hiw-flow active steps-grid">
            <div className="step">
              <div className="step-num step-num-orange">1</div><h3 className="step-title">Build Your Profile</h3>
              <p className="step-desc">Add your skills, upload portfolio media, and set your starting price per gig.</p>
            </div>
            <div className="step">
              <div className="step-num step-num-orange">2</div><h3 className="step-title">Turn On Pro Mode</h3>
              <p className="step-desc">Enable Professional Mode to appear in discovery so hosts can find and invite you.</p>
            </div>
            <div className="step">
              <div className="step-num step-num-orange">3</div><h3 className="step-title">Browse & Apply</h3>
              <p className="step-desc">Filter open gigs by category, city, and budget. Apply with one tap.</p>
            </div>
            <div className="step">
              <div className="step-num step-num-orange">4</div><h3 className="step-title">Get Confirmed</h3>
              <p className="step-desc">When a host accepts, you're booked. Track all your gigs and messages in-app.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
