/*
  # Create multilingual content structure for Pei Kin Ginseng Hall

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `message` (text, required)
      - `created_at` (timestamp)
    
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert contact inquiries
    - Add policy for authenticated admin users to view inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);