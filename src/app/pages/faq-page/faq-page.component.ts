import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css'],
})
export class FaqPageComponent {
  activeTab: 'general' | 'setup' = 'general';
  searchTerm: string = '';

  generalFaqs: FaqItem[] = [
    {
      question: 'What is an FAQ section?',
      answer:
        'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
      isOpen: true,
    },
    {
      question: 'Why do FAQs matter?',
      answer:
        'FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.',
      isOpen: false,
    },
    {
      question: 'Where can I add my FAQs?',
      answer:
        'FAQs can be added to any page on your site or your Wix mobile app, giving access to members on the go.',
      isOpen: false,
    },
  ];

  setupFaqs: FaqItem[] = [
    {
      question: 'How do I add a new question & answer?',
      answer:
        'To add a new FAQ follow these steps: 1. Manage FAQs from your site dashboard or in the Editor 2. Add a new question & answer 3. Assign your FAQ to a category 4. Save and publish. You can always come back and edit your FAQs.',
      isOpen: true,
    },
    {
      question: 'Can I insert an image, video, or GIF in my FAQ?',
      answer:
        'Yes. To add media follow these steps: 1. Manage FAQs from your site dashboard or in the Editor 2. Create a new FAQ or edit an existing one 3. From the answer text box click on the video, image or GIF icon 4. Add media from your library and save.',
      isOpen: false,
    },
    {
      question:
        'How do I edit or remove the ‘Frequently Asked Questions’ title?',
      answer:
        'You can edit the title from the FAQ ‘Settings’ tab in the Editor. To remove the title from your mobile app go to the ‘Site & App’ tab in your Owner’s app and customize.',
      isOpen: false,
    },
  ];

  get faqs() {
    const currentFaqs =
      this.activeTab === 'general' ? this.generalFaqs : this.setupFaqs;

    if (!this.searchTerm.trim()) {
      return currentFaqs;
    }

    return currentFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  toggleFaq(faq: FaqItem): void {
    faq.isOpen = !faq.isOpen;
  }

  selectTab(tab: 'general' | 'setup'): void {
    this.activeTab = tab;
  }
}
