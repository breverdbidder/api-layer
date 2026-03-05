export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      abandonment_patterns: {
        Row: {
          adhd_symptom_score: number | null
          context_factors: Json | null
          created_at: string | null
          day_of_week: string | null
          energy_level: number | null
          focus_quality: number | null
          frequency: number | null
          id: number
          pattern_type: string | null
          recommended_intervention: string | null
          success_rate: number | null
          task_id: number | null
          time_of_day: string | null
          user_id: number | null
        }
        Insert: {
          adhd_symptom_score?: number | null
          context_factors?: Json | null
          created_at?: string | null
          day_of_week?: string | null
          energy_level?: number | null
          focus_quality?: number | null
          frequency?: number | null
          id?: number
          pattern_type?: string | null
          recommended_intervention?: string | null
          success_rate?: number | null
          task_id?: number | null
          time_of_day?: string | null
          user_id?: number | null
        }
        Update: {
          adhd_symptom_score?: number | null
          context_factors?: Json | null
          created_at?: string | null
          day_of_week?: string | null
          energy_level?: number | null
          focus_quality?: number | null
          frequency?: number | null
          id?: number
          pattern_type?: string | null
          recommended_intervention?: string | null
          success_rate?: number | null
          task_id?: number | null
          time_of_day?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      active_tasks: {
        Row: {
          abandoned_reason: string | null
          blocker_reason: string | null
          chat_url: string | null
          clarity: number | null
          completed_at: string | null
          completion_pct: number | null
          complexity: number | null
          context_switches: number | null
          conversation_date: string | null
          created_at: string | null
          deliverable_path: string | null
          deliverable_type: string | null
          deliverable_verified: boolean | null
          description: string | null
          domain: string | null
          estimated_minutes: number | null
          force_strategy: string | null
          intervention_level: number | null
          last_intervention_at: string | null
          started_at: string | null
          status: string | null
          task_id: string
          title: string
          updated_at: string | null
          who_blocked: string | null
        }
        Insert: {
          abandoned_reason?: string | null
          blocker_reason?: string | null
          chat_url?: string | null
          clarity?: number | null
          completed_at?: string | null
          completion_pct?: number | null
          complexity?: number | null
          context_switches?: number | null
          conversation_date?: string | null
          created_at?: string | null
          deliverable_path?: string | null
          deliverable_type?: string | null
          deliverable_verified?: boolean | null
          description?: string | null
          domain?: string | null
          estimated_minutes?: number | null
          force_strategy?: string | null
          intervention_level?: number | null
          last_intervention_at?: string | null
          started_at?: string | null
          status?: string | null
          task_id: string
          title: string
          updated_at?: string | null
          who_blocked?: string | null
        }
        Update: {
          abandoned_reason?: string | null
          blocker_reason?: string | null
          chat_url?: string | null
          clarity?: number | null
          completed_at?: string | null
          completion_pct?: number | null
          complexity?: number | null
          context_switches?: number | null
          conversation_date?: string | null
          created_at?: string | null
          deliverable_path?: string | null
          deliverable_type?: string | null
          deliverable_verified?: boolean | null
          description?: string | null
          domain?: string | null
          estimated_minutes?: number | null
          force_strategy?: string | null
          intervention_level?: number | null
          last_intervention_at?: string | null
          started_at?: string | null
          status?: string | null
          task_id?: string
          title?: string
          updated_at?: string | null
          who_blocked?: string | null
        }
        Relationships: []
      }
      activities: {
        Row: {
          activity_type: string
          context_switches: number | null
          created_at: string | null
          domain: string | null
          duration_minutes: number | null
          end_time: string | null
          energy_level: number | null
          focus_quality: number | null
          id: number
          notes: string | null
          platform: string | null
          start_time: string
          timezone: string | null
          user_id: number | null
        }
        Insert: {
          activity_type: string
          context_switches?: number | null
          created_at?: string | null
          domain?: string | null
          duration_minutes?: number | null
          end_time?: string | null
          energy_level?: number | null
          focus_quality?: number | null
          id?: number
          notes?: string | null
          platform?: string | null
          start_time?: string
          timezone?: string | null
          user_id?: number | null
        }
        Update: {
          activity_type?: string
          context_switches?: number | null
          created_at?: string | null
          domain?: string | null
          duration_minutes?: number | null
          end_time?: string | null
          energy_level?: number | null
          focus_quality?: number | null
          id?: number
          notes?: string | null
          platform?: string | null
          start_time?: string
          timezone?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      agent_events: {
        Row: {
          agent: string
          created_at: string | null
          event_type: string
          id: string
          issue_number: number | null
          metadata: Json | null
          phase: string | null
          repo: string | null
          status: string | null
          timestamp: string | null
          tokens_used: number | null
          tool: string | null
        }
        Insert: {
          agent: string
          created_at?: string | null
          event_type: string
          id?: string
          issue_number?: number | null
          metadata?: Json | null
          phase?: string | null
          repo?: string | null
          status?: string | null
          timestamp?: string | null
          tokens_used?: number | null
          tool?: string | null
        }
        Update: {
          agent?: string
          created_at?: string | null
          event_type?: string
          id?: string
          issue_number?: number | null
          metadata?: Json | null
          phase?: string | null
          repo?: string | null
          status?: string | null
          timestamp?: string | null
          tokens_used?: number | null
          tool?: string | null
        }
        Relationships: []
      }
      agent_handoffs: {
        Row: {
          attempt: number | null
          case_number: string | null
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          handoff_data: Json
          handoff_id: string
          id: string
          pipeline_stage: number | null
          source_agent: string
          status: string | null
          target_agent: string
          task_type: string | null
        }
        Insert: {
          attempt?: number | null
          case_number?: string | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          handoff_data: Json
          handoff_id: string
          id?: string
          pipeline_stage?: number | null
          source_agent: string
          status?: string | null
          target_agent: string
          task_type?: string | null
        }
        Update: {
          attempt?: number | null
          case_number?: string | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          handoff_data?: Json
          handoff_id?: string
          id?: string
          pipeline_stage?: number | null
          source_agent?: string
          status?: string | null
          target_agent?: string
          task_type?: string | null
        }
        Relationships: []
      }
      allowed_uses: {
        Row: {
          conditions: string | null
          created_at: string | null
          id: number
          ordinance_section: string | null
          use_name: string
          use_type: string
          zoning_district_id: number
        }
        Insert: {
          conditions?: string | null
          created_at?: string | null
          id?: number
          ordinance_section?: string | null
          use_name: string
          use_type: string
          zoning_district_id: number
        }
        Update: {
          conditions?: string | null
          created_at?: string | null
          id?: number
          ordinance_section?: string | null
          use_name?: string
          use_type?: string
          zoning_district_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "allowed_uses_zoning_district_id_fkey"
            columns: ["zoning_district_id"]
            isOneToOne: false
            referencedRelation: "zoning_districts"
            referencedColumns: ["id"]
          },
        ]
      }
      api_library: {
        Row: {
          api_name: string
          category: string | null
          created_at: string | null
          deployment_status: string | null
          id: number
          integration_date: string | null
          priority: string | null
          use_case: string | null
        }
        Insert: {
          api_name: string
          category?: string | null
          created_at?: string | null
          deployment_status?: string | null
          id?: number
          integration_date?: string | null
          priority?: string | null
          use_case?: string | null
        }
        Update: {
          api_name?: string
          category?: string | null
          created_at?: string | null
          deployment_status?: string | null
          id?: number
          integration_date?: string | null
          priority?: string | null
          use_case?: string | null
        }
        Relationships: []
      }
      appraisal_reports: {
        Row: {
          analysis_id: string | null
          confidence_overall: number | null
          expires_at: string | null
          generated_at: string | null
          id: string
          kpi_count: number | null
          metadata: Json | null
          report_type: string
          report_url: string | null
          value_conclusion: number | null
        }
        Insert: {
          analysis_id?: string | null
          confidence_overall?: number | null
          expires_at?: string | null
          generated_at?: string | null
          id?: string
          kpi_count?: number | null
          metadata?: Json | null
          report_type: string
          report_url?: string | null
          value_conclusion?: number | null
        }
        Update: {
          analysis_id?: string | null
          confidence_overall?: number | null
          expires_at?: string | null
          generated_at?: string | null
          id?: string
          kpi_count?: number | null
          metadata?: Json | null
          report_type?: string
          report_url?: string | null
          value_conclusion?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "appraisal_reports_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "property_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      asset_tracking: {
        Row: {
          account_name: string | null
          asset_date: string | null
          asset_type: string
          created_at: string | null
          current_value: number
          description: string | null
          exempt_reason: string | null
          id: string
          institution: string | null
          is_countable: boolean | null
          tax_year_id: string | null
        }
        Insert: {
          account_name?: string | null
          asset_date?: string | null
          asset_type: string
          created_at?: string | null
          current_value: number
          description?: string | null
          exempt_reason?: string | null
          id?: string
          institution?: string | null
          is_countable?: boolean | null
          tax_year_id?: string | null
        }
        Update: {
          account_name?: string | null
          asset_date?: string | null
          asset_type?: string
          created_at?: string | null
          current_value?: number
          description?: string | null
          exempt_reason?: string | null
          id?: string
          institution?: string | null
          is_countable?: boolean | null
          tax_year_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "asset_tracking_tax_year_id_fkey"
            columns: ["tax_year_id"]
            isOneToOne: false
            referencedRelation: "tax_years"
            referencedColumns: ["id"]
          },
        ]
      }
      auction_calendar: {
        Row: {
          auction_date: string
          auction_location: string | null
          auction_method: string | null
          auction_time: string | null
          auction_type: string | null
          county: string
          county_id: string
          created_at: string | null
          defendant: string | null
          estimated_value: number | null
          fc_subdomain: string | null
          id: number
          judgment_amount: number | null
          notes: string | null
          property_count: number | null
          property_type: string | null
          retrieved_at: string | null
          scrape_batch_id: string | null
          source_domain: string | null
          source_url: string | null
          state: string | null
          status: string | null
          td_platform: string | null
          updated_at: string | null
        }
        Insert: {
          auction_date: string
          auction_location?: string | null
          auction_method?: string | null
          auction_time?: string | null
          auction_type?: string | null
          county: string
          county_id: string
          created_at?: string | null
          defendant?: string | null
          estimated_value?: number | null
          fc_subdomain?: string | null
          id?: number
          judgment_amount?: number | null
          notes?: string | null
          property_count?: number | null
          property_type?: string | null
          retrieved_at?: string | null
          scrape_batch_id?: string | null
          source_domain?: string | null
          source_url?: string | null
          state?: string | null
          status?: string | null
          td_platform?: string | null
          updated_at?: string | null
        }
        Update: {
          auction_date?: string
          auction_location?: string | null
          auction_method?: string | null
          auction_time?: string | null
          auction_type?: string | null
          county?: string
          county_id?: string
          created_at?: string | null
          defendant?: string | null
          estimated_value?: number | null
          fc_subdomain?: string | null
          id?: number
          judgment_amount?: number | null
          notes?: string | null
          property_count?: number | null
          property_type?: string | null
          retrieved_at?: string | null
          scrape_batch_id?: string | null
          source_domain?: string | null
          source_url?: string | null
          state?: string | null
          status?: string | null
          td_platform?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      auction_calendar_validation: {
        Row: {
          auction_type: string
          county: string
          details: Json | null
          discrepancy_count: number | null
          id: number
          match_count: number | null
          our_count: number | null
          po_count: number | null
          validated_at: string | null
          validation_date: string
        }
        Insert: {
          auction_type: string
          county: string
          details?: Json | null
          discrepancy_count?: number | null
          id?: number
          match_count?: number | null
          our_count?: number | null
          po_count?: number | null
          validated_at?: string | null
          validation_date: string
        }
        Update: {
          auction_type?: string
          county?: string
          details?: Json | null
          discrepancy_count?: number | null
          id?: number
          match_count?: number | null
          our_count?: number | null
          po_count?: number | null
          validated_at?: string | null
          validation_date?: string
        }
        Relationships: []
      }
      auction_results: {
        Row: {
          baths: number | null
          beds: number | null
          case_number: string | null
          created_at: string | null
          data_source: string | null
          id: number
          notes: Json | null
          property_address: string
          property_type: string | null
          sale_date: string
          sale_date_actual: string | null
          sale_price: number | null
          scraped_at: string | null
          sqft: number | null
          status: string
          winner_type: string | null
        }
        Insert: {
          baths?: number | null
          beds?: number | null
          case_number?: string | null
          created_at?: string | null
          data_source?: string | null
          id?: number
          notes?: Json | null
          property_address: string
          property_type?: string | null
          sale_date: string
          sale_date_actual?: string | null
          sale_price?: number | null
          scraped_at?: string | null
          sqft?: number | null
          status: string
          winner_type?: string | null
        }
        Update: {
          baths?: number | null
          beds?: number | null
          case_number?: string | null
          created_at?: string | null
          data_source?: string | null
          id?: number
          notes?: Json | null
          property_address?: string
          property_type?: string | null
          sale_date?: string
          sale_date_actual?: string | null
          sale_price?: number | null
          scraped_at?: string | null
          sqft?: number | null
          status?: string
          winner_type?: string | null
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          checksum: string
          created_at: string | null
          details: Json | null
          event_id: string
          event_type: string
          id: number
          status: string
          target: string
          timestamp: string
          user_id: string | null
          workflow_id: string
        }
        Insert: {
          action: string
          checksum: string
          created_at?: string | null
          details?: Json | null
          event_id: string
          event_type: string
          id?: number
          status: string
          target: string
          timestamp?: string
          user_id?: string | null
          workflow_id: string
        }
        Update: {
          action?: string
          checksum?: string
          created_at?: string | null
          details?: Json | null
          event_id?: string
          event_type?: string
          id?: number
          status?: string
          target?: string
          timestamp?: string
          user_id?: string | null
          workflow_id?: string
        }
        Relationships: []
      }
      beta_signups: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          id: string
          interests: string[] | null
          invited: boolean | null
          invited_at: string | null
          ip_address: unknown
          role: string | null
          signup_notes: string | null
          source: string | null
          user_agent: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          interests?: string[] | null
          invited?: boolean | null
          invited_at?: string | null
          ip_address?: unknown
          role?: string | null
          signup_notes?: string | null
          source?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          interests?: string[] | null
          invited?: boolean | null
          invited_at?: string | null
          ip_address?: unknown
          role?: string | null
          signup_notes?: string | null
          source?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      bid_decisions: {
        Row: {
          address: string | null
          arv: number | null
          auction_date: string | null
          bid_judgment_ratio: number | null
          case_number: string
          confidence: number | null
          created_at: string | null
          factors: Json | null
          final_judgment: number | null
          id: number
          max_bid: number | null
          ml_score: number | null
          parcel_id: string | null
          pipeline_run_id: string | null
          recommendation: string | null
          repairs: number | null
        }
        Insert: {
          address?: string | null
          arv?: number | null
          auction_date?: string | null
          bid_judgment_ratio?: number | null
          case_number: string
          confidence?: number | null
          created_at?: string | null
          factors?: Json | null
          final_judgment?: number | null
          id?: number
          max_bid?: number | null
          ml_score?: number | null
          parcel_id?: string | null
          pipeline_run_id?: string | null
          recommendation?: string | null
          repairs?: number | null
        }
        Update: {
          address?: string | null
          arv?: number | null
          auction_date?: string | null
          bid_judgment_ratio?: number | null
          case_number?: string
          confidence?: number | null
          created_at?: string | null
          factors?: Json | null
          final_judgment?: number | null
          id?: number
          max_bid?: number | null
          ml_score?: number | null
          parcel_id?: string | null
          pipeline_run_id?: string | null
          recommendation?: string | null
          repairs?: number | null
        }
        Relationships: []
      }
      brand_hierarchy: {
        Row: {
          brand_name: string
          brand_type: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          metadata: Json | null
          parent_id: string | null
          primary_color: string | null
          secondary_color: string | null
          sort_order: number | null
          tagline: string | null
          updated_at: string | null
        }
        Insert: {
          brand_name: string
          brand_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          metadata?: Json | null
          parent_id?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          sort_order?: number | null
          tagline?: string | null
          updated_at?: string | null
        }
        Update: {
          brand_name?: string
          brand_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          metadata?: Json | null
          parent_id?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          sort_order?: number | null
          tagline?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_hierarchy_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "brand_hierarchy"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_messaging: {
        Row: {
          audience: string | null
          brand_id: string | null
          created_at: string | null
          id: string
          is_primary: boolean | null
          language: string | null
          message_text: string
          message_type: string
          updated_at: string | null
        }
        Insert: {
          audience?: string | null
          brand_id?: string | null
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          language?: string | null
          message_text: string
          message_type: string
          updated_at?: string | null
        }
        Update: {
          audience?: string | null
          brand_id?: string | null
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          language?: string | null
          message_text?: string
          message_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_messaging_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brand_hierarchy"
            referencedColumns: ["id"]
          },
        ]
      }
      brevard_properties: {
        Row: {
          acres: number | null
          bldg_value: number | null
          bldg2_flag: string | null
          bldg3_flag: string | null
          block_code: string | null
          condo_name: string | null
          condo_number: string | null
          created_at: string | null
          drain_code: string | null
          exemption_code: string | null
          homestead_value: number | null
          id: number
          jurisdiction_id: number | null
          land_value: number | null
          legal_desc: string | null
          living_area: number | null
          lot_code: string | null
          millage_code: string | null
          other_exemption_value: number | null
          owner_address2: string | null
          owner_city: string | null
          owner_name1: string | null
          owner_name2: string | null
          owner_state: string | null
          owner_street: string | null
          owner_zip4: string | null
          owner_zip5: string | null
          parcel_id: string
          plat_book: string | null
          plat_page: string | null
          property_id: number | null
          range_code: string | null
          section_code: string | null
          shape_area: number | null
          shape_length: number | null
          site_city: string | null
          site_zip: string | null
          solid_waste_units: number | null
          source: string | null
          street_direction: string | null
          street_name: string | null
          street_number: string | null
          street_type: string | null
          subdivision_code: string | null
          subdivision_name: string | null
          tax_account: number | null
          township: string | null
          updated_at: string | null
          use_code: string | null
          use_code_description: string | null
          use_code3: string | null
        }
        Insert: {
          acres?: number | null
          bldg_value?: number | null
          bldg2_flag?: string | null
          bldg3_flag?: string | null
          block_code?: string | null
          condo_name?: string | null
          condo_number?: string | null
          created_at?: string | null
          drain_code?: string | null
          exemption_code?: string | null
          homestead_value?: number | null
          id?: number
          jurisdiction_id?: number | null
          land_value?: number | null
          legal_desc?: string | null
          living_area?: number | null
          lot_code?: string | null
          millage_code?: string | null
          other_exemption_value?: number | null
          owner_address2?: string | null
          owner_city?: string | null
          owner_name1?: string | null
          owner_name2?: string | null
          owner_state?: string | null
          owner_street?: string | null
          owner_zip4?: string | null
          owner_zip5?: string | null
          parcel_id: string
          plat_book?: string | null
          plat_page?: string | null
          property_id?: number | null
          range_code?: string | null
          section_code?: string | null
          shape_area?: number | null
          shape_length?: number | null
          site_city?: string | null
          site_zip?: string | null
          solid_waste_units?: number | null
          source?: string | null
          street_direction?: string | null
          street_name?: string | null
          street_number?: string | null
          street_type?: string | null
          subdivision_code?: string | null
          subdivision_name?: string | null
          tax_account?: number | null
          township?: string | null
          updated_at?: string | null
          use_code?: string | null
          use_code_description?: string | null
          use_code3?: string | null
        }
        Update: {
          acres?: number | null
          bldg_value?: number | null
          bldg2_flag?: string | null
          bldg3_flag?: string | null
          block_code?: string | null
          condo_name?: string | null
          condo_number?: string | null
          created_at?: string | null
          drain_code?: string | null
          exemption_code?: string | null
          homestead_value?: number | null
          id?: number
          jurisdiction_id?: number | null
          land_value?: number | null
          legal_desc?: string | null
          living_area?: number | null
          lot_code?: string | null
          millage_code?: string | null
          other_exemption_value?: number | null
          owner_address2?: string | null
          owner_city?: string | null
          owner_name1?: string | null
          owner_name2?: string | null
          owner_state?: string | null
          owner_street?: string | null
          owner_zip4?: string | null
          owner_zip5?: string | null
          parcel_id?: string
          plat_book?: string | null
          plat_page?: string | null
          property_id?: number | null
          range_code?: string | null
          section_code?: string | null
          shape_area?: number | null
          shape_length?: number | null
          site_city?: string | null
          site_zip?: string | null
          solid_waste_units?: number | null
          source?: string | null
          street_direction?: string | null
          street_name?: string | null
          street_number?: string | null
          street_type?: string | null
          subdivision_code?: string | null
          subdivision_name?: string | null
          tax_account?: number | null
          township?: string | null
          updated_at?: string | null
          use_code?: string | null
          use_code_description?: string | null
          use_code3?: string | null
        }
        Relationships: []
      }
      building_details: {
        Row: {
          building_number: number | null
          building_use_code: string | null
          building_use_desc: string | null
          commercial_units: number | null
          created_at: string | null
          exterior_wall: string | null
          extra_features: Json | null
          floors: number | null
          frame_type: string | null
          id: number
          residential_units: number | null
          roof_structure: string | null
          roof_type: string | null
          story_height: number | null
          sub_areas: Json | null
          tax_account: string
          total_base_area: number | null
          total_sub_area: number | null
          year_built: number | null
        }
        Insert: {
          building_number?: number | null
          building_use_code?: string | null
          building_use_desc?: string | null
          commercial_units?: number | null
          created_at?: string | null
          exterior_wall?: string | null
          extra_features?: Json | null
          floors?: number | null
          frame_type?: string | null
          id?: number
          residential_units?: number | null
          roof_structure?: string | null
          roof_type?: string | null
          story_height?: number | null
          sub_areas?: Json | null
          tax_account: string
          total_base_area?: number | null
          total_sub_area?: number | null
          year_built?: number | null
        }
        Update: {
          building_number?: number | null
          building_use_code?: string | null
          building_use_desc?: string | null
          commercial_units?: number | null
          created_at?: string | null
          exterior_wall?: string | null
          extra_features?: Json | null
          floors?: number | null
          frame_type?: string | null
          id?: number
          residential_units?: number | null
          roof_structure?: string | null
          roof_type?: string | null
          story_height?: number | null
          sub_areas?: Json | null
          tax_account?: string
          total_base_area?: number | null
          total_sub_area?: number | null
          year_built?: number | null
        }
        Relationships: []
      }
      campaign_agent_log: {
        Row: {
          action: string
          agent_id: string
          created_at: string | null
          details: Json | null
          duration_ms: number | null
          error_message: string | null
          id: string
          success: boolean | null
        }
        Insert: {
          action: string
          agent_id: string
          created_at?: string | null
          details?: Json | null
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          success?: boolean | null
        }
        Update: {
          action?: string
          agent_id?: string
          created_at?: string | null
          details?: Json | null
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          success?: boolean | null
        }
        Relationships: []
      }
      campaign_content: {
        Row: {
          channel: string
          content: string
          content_type: string
          created_at: string | null
          engagement_score: number | null
          id: string
          metrics: Json | null
          posted_at: string | null
          status: string | null
          target_url: string | null
          template_id: string | null
        }
        Insert: {
          channel: string
          content: string
          content_type: string
          created_at?: string | null
          engagement_score?: number | null
          id?: string
          metrics?: Json | null
          posted_at?: string | null
          status?: string | null
          target_url?: string | null
          template_id?: string | null
        }
        Update: {
          channel?: string
          content?: string
          content_type?: string
          created_at?: string | null
          engagement_score?: number | null
          id?: string
          metrics?: Json | null
          posted_at?: string | null
          status?: string | null
          target_url?: string | null
          template_id?: string | null
        }
        Relationships: []
      }
      campaign_leads: {
        Row: {
          agent_id: string | null
          author: string | null
          channel_detail: string | null
          content_preview: string | null
          converted_to_beta: boolean | null
          created_at: string | null
          id: string
          intent_signal: string | null
          lead_type: string
          relevance_score: number | null
          response_draft: string | null
          response_posted_at: string | null
          source: string
          status: string | null
          updated_at: string | null
          url: string | null
        }
        Insert: {
          agent_id?: string | null
          author?: string | null
          channel_detail?: string | null
          content_preview?: string | null
          converted_to_beta?: boolean | null
          created_at?: string | null
          id?: string
          intent_signal?: string | null
          lead_type: string
          relevance_score?: number | null
          response_draft?: string | null
          response_posted_at?: string | null
          source: string
          status?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          agent_id?: string | null
          author?: string | null
          channel_detail?: string | null
          content_preview?: string | null
          converted_to_beta?: boolean | null
          created_at?: string | null
          id?: string
          intent_signal?: string | null
          lead_type?: string
          relevance_score?: number | null
          response_draft?: string | null
          response_posted_at?: string | null
          source?: string
          status?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Relationships: []
      }
      campaign_metrics: {
        Row: {
          beta_signups: number | null
          channel: string
          cost_spent: number | null
          created_at: string | null
          date: string
          engagement_received: number | null
          id: string
          leads_found: number | null
          notes: string | null
          responses_sent: number | null
        }
        Insert: {
          beta_signups?: number | null
          channel: string
          cost_spent?: number | null
          created_at?: string | null
          date?: string
          engagement_received?: number | null
          id?: string
          leads_found?: number | null
          notes?: string | null
          responses_sent?: number | null
        }
        Update: {
          beta_signups?: number | null
          channel?: string
          cost_spent?: number | null
          created_at?: string | null
          date?: string
          engagement_received?: number | null
          id?: string
          leads_found?: number | null
          notes?: string | null
          responses_sent?: number | null
        }
        Relationships: []
      }
      campaign_prospects: {
        Row: {
          created_at: string | null
          fit_score: number | null
          focus_area: string | null
          id: string
          last_contact_at: string | null
          location: string | null
          name: string | null
          notes: string | null
          outreach_stage: string | null
          profile_url: string | null
          source: string
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          fit_score?: number | null
          focus_area?: string | null
          id?: string
          last_contact_at?: string | null
          location?: string | null
          name?: string | null
          notes?: string | null
          outreach_stage?: string | null
          profile_url?: string | null
          source: string
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          fit_score?: number | null
          focus_area?: string | null
          id?: string
          last_contact_at?: string | null
          location?: string | null
          name?: string | null
          notes?: string | null
          outreach_stage?: string | null
          profile_url?: string | null
          source?: string
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content_summary: string | null
          domain: string | null
          id: number
          message_number: number | null
          message_type: string | null
          processing_time_seconds: number | null
          role: string
          session_id: string
          task_id: string | null
          timestamp: string | null
          tokens_estimated: number | null
          tool_calls_count: number | null
        }
        Insert: {
          content_summary?: string | null
          domain?: string | null
          id?: number
          message_number?: number | null
          message_type?: string | null
          processing_time_seconds?: number | null
          role: string
          session_id: string
          task_id?: string | null
          timestamp?: string | null
          tokens_estimated?: number | null
          tool_calls_count?: number | null
        }
        Update: {
          content_summary?: string | null
          domain?: string | null
          id?: number
          message_number?: number | null
          message_type?: string | null
          processing_time_seconds?: number | null
          role?: string
          session_id?: string
          task_id?: string | null
          timestamp?: string | null
          tokens_estimated?: number | null
          tool_calls_count?: number | null
        }
        Relationships: []
      }
      chat_sessions: {
        Row: {
          adhd_interventions_triggered: number | null
          context_switches: number | null
          created_at: string | null
          domains_touched: string[] | null
          ended_at: string | null
          id: number
          primary_domain: string | null
          session_id: string
          session_summary: string | null
          started_at: string | null
          tasks_abandoned: number | null
          tasks_completed: number | null
          tasks_initiated: number | null
          total_messages: number | null
          total_tool_calls: number | null
        }
        Insert: {
          adhd_interventions_triggered?: number | null
          context_switches?: number | null
          created_at?: string | null
          domains_touched?: string[] | null
          ended_at?: string | null
          id?: number
          primary_domain?: string | null
          session_id: string
          session_summary?: string | null
          started_at?: string | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          tasks_initiated?: number | null
          total_messages?: number | null
          total_tool_calls?: number | null
        }
        Update: {
          adhd_interventions_triggered?: number | null
          context_switches?: number | null
          created_at?: string | null
          domains_touched?: string[] | null
          ended_at?: string | null
          id?: number
          primary_domain?: string | null
          session_id?: string
          session_summary?: string | null
          started_at?: string | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          tasks_initiated?: number | null
          total_messages?: number | null
          total_tool_calls?: number | null
        }
        Relationships: []
      }
      ci_analyses: {
        Row: {
          analyzed_at: string | null
          competitor_id: string
          competitor_name: string
          created_at: string | null
          features: Json | null
          id: string
          marketing_claims: Json | null
          pricing_signals: Json | null
          raw_analysis: string | null
          technical_stack: Json | null
          ui_patterns: Json | null
          video_url: string
        }
        Insert: {
          analyzed_at?: string | null
          competitor_id: string
          competitor_name: string
          created_at?: string | null
          features?: Json | null
          id?: string
          marketing_claims?: Json | null
          pricing_signals?: Json | null
          raw_analysis?: string | null
          technical_stack?: Json | null
          ui_patterns?: Json | null
          video_url: string
        }
        Update: {
          analyzed_at?: string | null
          competitor_id?: string
          competitor_name?: string
          created_at?: string | null
          features?: Json | null
          id?: string
          marketing_claims?: Json | null
          pricing_signals?: Json | null
          raw_analysis?: string | null
          technical_stack?: Json | null
          ui_patterns?: Json | null
          video_url?: string
        }
        Relationships: []
      }
      ci_analysis_jobs: {
        Row: {
          competitors: Json | null
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          features_extracted: number | null
          id: string
          started_at: string | null
          status: string | null
          videos_analyzed: number | null
        }
        Insert: {
          competitors?: Json | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          features_extracted?: number | null
          id: string
          started_at?: string | null
          status?: string | null
          videos_analyzed?: number | null
        }
        Update: {
          competitors?: Json | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          features_extracted?: number | null
          id?: string
          started_at?: string | null
          status?: string | null
          videos_analyzed?: number | null
        }
        Relationships: []
      }
      ci_clone_blueprints: {
        Row: {
          competitor_id: string
          competitor_name: string
          created_at: string | null
          estimated_days: number | null
          estimated_weeks: number | null
          features_critical: Json | null
          features_high: Json | null
          features_low: Json | null
          features_medium: Json | null
          generated_at: string | null
          id: string
          implementation_order: Json | null
          ui_patterns: Json | null
        }
        Insert: {
          competitor_id: string
          competitor_name: string
          created_at?: string | null
          estimated_days?: number | null
          estimated_weeks?: number | null
          features_critical?: Json | null
          features_high?: Json | null
          features_low?: Json | null
          features_medium?: Json | null
          generated_at?: string | null
          id?: string
          implementation_order?: Json | null
          ui_patterns?: Json | null
        }
        Update: {
          competitor_id?: string
          competitor_name?: string
          created_at?: string | null
          estimated_days?: number | null
          estimated_weeks?: number | null
          features_critical?: Json | null
          features_high?: Json | null
          features_low?: Json | null
          features_medium?: Json | null
          generated_at?: string | null
          id?: string
          implementation_order?: Json | null
          ui_patterns?: Json | null
        }
        Relationships: []
      }
      ci_competitors: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          domain: string | null
          id: string
          known_features: Json | null
          last_analyzed: string | null
          name: string
          pricing: Json | null
          tech_stack: Json | null
          traffic_data: Json | null
          updated_at: string | null
          video_sources: Json | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          domain?: string | null
          id: string
          known_features?: Json | null
          last_analyzed?: string | null
          name: string
          pricing?: Json | null
          tech_stack?: Json | null
          traffic_data?: Json | null
          updated_at?: string | null
          video_sources?: Json | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          domain?: string | null
          id?: string
          known_features?: Json | null
          last_analyzed?: string | null
          name?: string
          pricing?: Json | null
          tech_stack?: Json | null
          traffic_data?: Json | null
          updated_at?: string | null
          video_sources?: Json | null
        }
        Relationships: []
      }
      ci_feature_matrices: {
        Row: {
          biddeed_advantages: Json | null
          biddeed_gaps: Json | null
          competitors: Json
          created_at: string | null
          features: Json
          generated_at: string | null
          id: string
        }
        Insert: {
          biddeed_advantages?: Json | null
          biddeed_gaps?: Json | null
          competitors?: Json
          created_at?: string | null
          features?: Json
          generated_at?: string | null
          id?: string
        }
        Update: {
          biddeed_advantages?: Json | null
          biddeed_gaps?: Json | null
          competitors?: Json
          created_at?: string | null
          features?: Json
          generated_at?: string | null
          id?: string
        }
        Relationships: []
      }
      ci_feature_matrix: {
        Row: {
          biddeed_status: string | null
          competitors: Json | null
          created_at: string | null
          feature_category: string
          feature_name: string
          id: string
          notes: string | null
          priority: number | null
          updated_at: string | null
        }
        Insert: {
          biddeed_status?: string | null
          competitors?: Json | null
          created_at?: string | null
          feature_category: string
          feature_name: string
          id?: string
          notes?: string | null
          priority?: number | null
          updated_at?: string | null
        }
        Update: {
          biddeed_status?: string | null
          competitors?: Json | null
          created_at?: string | null
          feature_category?: string
          feature_name?: string
          id?: string
          notes?: string | null
          priority?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ci_video_sources: {
        Row: {
          added_at: string | null
          competitor_id: string
          created_at: string | null
          id: string
          is_active: boolean | null
          last_analyzed: string | null
          priority: number | null
          title: string | null
          video_type: string | null
          video_url: string
        }
        Insert: {
          added_at?: string | null
          competitor_id: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_analyzed?: string | null
          priority?: number | null
          title?: string | null
          video_type?: string | null
          video_url: string
        }
        Update: {
          added_at?: string | null
          competitor_id?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_analyzed?: string | null
          priority?: number | null
          title?: string | null
          video_type?: string | null
          video_url?: string
        }
        Relationships: []
      }
      claude_context_checkpoints: {
        Row: {
          active_tasks: Json | null
          checkpoint_number: number | null
          checkpoint_phase: string | null
          checkpoint_summary: string | null
          context_percent: number | null
          conversation_id: string | null
          counties_failed: Json | null
          created_at: string | null
          digests_delivered: number | null
          digests_generated: number | null
          errors: Json | null
          foreclosure_counties_scraped: number | null
          id: string
          key_points: Json | null
          pipeline_date: string | null
          project_id: string | null
          resume_from: string | null
          summary: string | null
          tax_deed_counties_scraped: number | null
          users_processed: number | null
        }
        Insert: {
          active_tasks?: Json | null
          checkpoint_number?: number | null
          checkpoint_phase?: string | null
          checkpoint_summary?: string | null
          context_percent?: number | null
          conversation_id?: string | null
          counties_failed?: Json | null
          created_at?: string | null
          digests_delivered?: number | null
          digests_generated?: number | null
          errors?: Json | null
          foreclosure_counties_scraped?: number | null
          id?: string
          key_points?: Json | null
          pipeline_date?: string | null
          project_id?: string | null
          resume_from?: string | null
          summary?: string | null
          tax_deed_counties_scraped?: number | null
          users_processed?: number | null
        }
        Update: {
          active_tasks?: Json | null
          checkpoint_number?: number | null
          checkpoint_phase?: string | null
          checkpoint_summary?: string | null
          context_percent?: number | null
          conversation_id?: string | null
          counties_failed?: Json | null
          created_at?: string | null
          digests_delivered?: number | null
          digests_generated?: number | null
          errors?: Json | null
          foreclosure_counties_scraped?: number | null
          id?: string
          key_points?: Json | null
          pipeline_date?: string | null
          project_id?: string | null
          resume_from?: string | null
          summary?: string | null
          tax_deed_counties_scraped?: number | null
          users_processed?: number | null
        }
        Relationships: []
      }
      claude_context_checkpoints_legacy: {
        Row: {
          active_tasks: string[] | null
          checkpoint_number: number
          checkpoint_summary: string
          context_percent: number
          conversation_id: string
          created_at: string | null
          id: string
          key_points: Json | null
        }
        Insert: {
          active_tasks?: string[] | null
          checkpoint_number: number
          checkpoint_summary: string
          context_percent: number
          conversation_id: string
          created_at?: string | null
          id?: string
          key_points?: Json | null
        }
        Update: {
          active_tasks?: string[] | null
          checkpoint_number?: number
          checkpoint_summary?: string
          context_percent?: number
          conversation_id?: string
          created_at?: string | null
          id?: string
          key_points?: Json | null
        }
        Relationships: []
      }
      claude_knowledge_base: {
        Row: {
          category: string
          confidence: string | null
          id: string
          key: string
          last_updated: string | null
          metadata: Json | null
          source_conversation_id: string | null
          subcategory: string | null
          times_referenced: number | null
          value: string
        }
        Insert: {
          category: string
          confidence?: string | null
          id?: string
          key: string
          last_updated?: string | null
          metadata?: Json | null
          source_conversation_id?: string | null
          subcategory?: string | null
          times_referenced?: number | null
          value: string
        }
        Update: {
          category?: string
          confidence?: string | null
          id?: string
          key?: string
          last_updated?: string | null
          metadata?: Json | null
          source_conversation_id?: string | null
          subcategory?: string | null
          times_referenced?: number | null
          value?: string
        }
        Relationships: []
      }
      claude_tasks: {
        Row: {
          abandoned_at: string | null
          clarity: number | null
          completed_at: string | null
          complexity: number | null
          conversation_id: string | null
          created_at: string | null
          description: string
          domain: string
          estimated_minutes: number | null
          id: string
          metadata: Json | null
          solution_provided_at: string | null
          status: string | null
          task_id: string
        }
        Insert: {
          abandoned_at?: string | null
          clarity?: number | null
          completed_at?: string | null
          complexity?: number | null
          conversation_id?: string | null
          created_at?: string | null
          description: string
          domain: string
          estimated_minutes?: number | null
          id?: string
          metadata?: Json | null
          solution_provided_at?: string | null
          status?: string | null
          task_id: string
        }
        Update: {
          abandoned_at?: string | null
          clarity?: number | null
          completed_at?: string | null
          complexity?: number | null
          conversation_id?: string | null
          created_at?: string | null
          description?: string
          domain?: string
          estimated_minutes?: number | null
          id?: string
          metadata?: Json | null
          solution_provided_at?: string | null
          status?: string | null
          task_id?: string
        }
        Relationships: []
      }
      cma_analyses: {
        Row: {
          analysis_id: string | null
          avg_price_psf: number | null
          comp_count: number | null
          comps_json: Json | null
          confidence_score: number | null
          created_at: string | null
          id: string
          market_trend: string | null
          median_dom: number | null
          subject_arv: number | null
        }
        Insert: {
          analysis_id?: string | null
          avg_price_psf?: number | null
          comp_count?: number | null
          comps_json?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          market_trend?: string | null
          median_dom?: number | null
          subject_arv?: number | null
        }
        Update: {
          analysis_id?: string | null
          avg_price_psf?: number | null
          comp_count?: number | null
          comps_json?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          market_trend?: string | null
          median_dom?: number | null
          subject_arv?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cma_analyses_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "property_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      competitor_intelligence: {
        Row: {
          api_endpoints: Json | null
          category: string
          competitor_name: string
          created_at: string | null
          domain: string
          emails: Json | null
          id: string
          ip_addresses: Json | null
          open_ports: Json | null
          raw_count: number | null
          scan_date: string
          scan_type: string
          social_profiles: Json | null
          ssl_info: Json | null
          subdomains: Json | null
          technologies: Json | null
          vulnerabilities: Json | null
        }
        Insert: {
          api_endpoints?: Json | null
          category: string
          competitor_name: string
          created_at?: string | null
          domain: string
          emails?: Json | null
          id?: string
          ip_addresses?: Json | null
          open_ports?: Json | null
          raw_count?: number | null
          scan_date?: string
          scan_type?: string
          social_profiles?: Json | null
          ssl_info?: Json | null
          subdomains?: Json | null
          technologies?: Json | null
          vulnerabilities?: Json | null
        }
        Update: {
          api_endpoints?: Json | null
          category?: string
          competitor_name?: string
          created_at?: string | null
          domain?: string
          emails?: Json | null
          id?: string
          ip_addresses?: Json | null
          open_ports?: Json | null
          raw_count?: number | null
          scan_date?: string
          scan_type?: string
          social_profiles?: Json | null
          ssl_info?: Json | null
          subdomains?: Json | null
          technologies?: Json | null
          vulnerabilities?: Json | null
        }
        Relationships: []
      }
      completion_blockers: {
        Row: {
          blocked_since: string | null
          blocker_id: number
          blocker_type: string
          estimated_resolution_time_minutes: number | null
          execution_id: number | null
          manual_action_description: string | null
          requires_manual_action: boolean | null
          resolution_method: string | null
          resolved: boolean | null
          resolved_at: string | null
          resolved_by: string | null
          responsible_party: string | null
          severity: string | null
          task_id: string | null
          workaround_available: boolean | null
          workaround_description: string | null
        }
        Insert: {
          blocked_since?: string | null
          blocker_id?: number
          blocker_type: string
          estimated_resolution_time_minutes?: number | null
          execution_id?: number | null
          manual_action_description?: string | null
          requires_manual_action?: boolean | null
          resolution_method?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          responsible_party?: string | null
          severity?: string | null
          task_id?: string | null
          workaround_available?: boolean | null
          workaround_description?: string | null
        }
        Update: {
          blocked_since?: string | null
          blocker_id?: number
          blocker_type?: string
          estimated_resolution_time_minutes?: number | null
          execution_id?: number | null
          manual_action_description?: string | null
          requires_manual_action?: boolean | null
          resolution_method?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          responsible_party?: string | null
          severity?: string | null
          task_id?: string | null
          workaround_available?: boolean | null
          workaround_description?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "completion_blockers_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "task_executions"
            referencedColumns: ["execution_id"]
          },
          {
            foreignKeyName: "completion_blockers_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "v_execution_timeline"
            referencedColumns: ["execution_id"]
          },
          {
            foreignKeyName: "completion_blockers_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "active_tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "completion_blockers_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "v_tasks_needing_attention"
            referencedColumns: ["task_id"]
          },
        ]
      }
      completion_metrics: {
        Row: {
          avg_completion_time_minutes: number | null
          avg_complexity: number | null
          claude_responsible_blocks: number | null
          completion_rate: number | null
          created_at: string | null
          deliverables_verified: number | null
          failed_verifications: number | null
          infra_responsible_blocks: number | null
          metric_id: number
          period_end: string
          period_start: string
          period_type: string | null
          tasks_abandoned: number | null
          tasks_blocked: number | null
          tasks_completed: number | null
          tasks_deferred: number | null
          tasks_initiated: number | null
          user_responsible_blocks: number | null
        }
        Insert: {
          avg_completion_time_minutes?: number | null
          avg_complexity?: number | null
          claude_responsible_blocks?: number | null
          completion_rate?: number | null
          created_at?: string | null
          deliverables_verified?: number | null
          failed_verifications?: number | null
          infra_responsible_blocks?: number | null
          metric_id?: number
          period_end: string
          period_start: string
          period_type?: string | null
          tasks_abandoned?: number | null
          tasks_blocked?: number | null
          tasks_completed?: number | null
          tasks_deferred?: number | null
          tasks_initiated?: number | null
          user_responsible_blocks?: number | null
        }
        Update: {
          avg_completion_time_minutes?: number | null
          avg_complexity?: number | null
          claude_responsible_blocks?: number | null
          completion_rate?: number | null
          created_at?: string | null
          deliverables_verified?: number | null
          failed_verifications?: number | null
          infra_responsible_blocks?: number | null
          metric_id?: number
          period_end?: string
          period_start?: string
          period_type?: string | null
          tasks_abandoned?: number | null
          tasks_blocked?: number | null
          tasks_completed?: number | null
          tasks_deferred?: number | null
          tasks_initiated?: number | null
          user_responsible_blocks?: number | null
        }
        Relationships: []
      }
      conditional_uses: {
        Row: {
          application_fee: number | null
          approval_body: string | null
          approval_type: string
          conditions: string[] | null
          created_at: string | null
          district_code: string
          estimated_timeline_days: number | null
          id: number
          jurisdiction_id: number
          ordinance_section: string | null
          source_url: string | null
          standards: string | null
          use_category: string | null
          use_name: string
        }
        Insert: {
          application_fee?: number | null
          approval_body?: string | null
          approval_type: string
          conditions?: string[] | null
          created_at?: string | null
          district_code: string
          estimated_timeline_days?: number | null
          id?: number
          jurisdiction_id: number
          ordinance_section?: string | null
          source_url?: string | null
          standards?: string | null
          use_category?: string | null
          use_name: string
        }
        Update: {
          application_fee?: number | null
          approval_body?: string | null
          approval_type?: string
          conditions?: string[] | null
          created_at?: string | null
          district_code?: string
          estimated_timeline_days?: number | null
          id?: number
          jurisdiction_id?: number
          ordinance_section?: string | null
          source_url?: string | null
          standards?: string | null
          use_category?: string | null
          use_name?: string
        }
        Relationships: []
      }
      content_distribution: {
        Row: {
          content_id: string
          created_at: string | null
          error: string | null
          id: string
          platform: string
          post_id: string | null
          published_time: string | null
          scheduled_time: string | null
          status: string | null
        }
        Insert: {
          content_id: string
          created_at?: string | null
          error?: string | null
          id?: string
          platform: string
          post_id?: string | null
          published_time?: string | null
          scheduled_time?: string | null
          status?: string | null
        }
        Update: {
          content_id?: string
          created_at?: string | null
          error?: string | null
          id?: string
          platform?: string
          post_id?: string | null
          published_time?: string | null
          scheduled_time?: string | null
          status?: string | null
        }
        Relationships: []
      }
      content_library: {
        Row: {
          auction_date: string
          content: Json
          content_id: string
          conversion_rate: number | null
          created_at: string | null
          engagement_score: number | null
          id: string
          media: Json | null
          platform: string
          scheduled_time: string | null
          status: string | null
          type: string
        }
        Insert: {
          auction_date: string
          content: Json
          content_id: string
          conversion_rate?: number | null
          created_at?: string | null
          engagement_score?: number | null
          id?: string
          media?: Json | null
          platform: string
          scheduled_time?: string | null
          status?: string | null
          type: string
        }
        Update: {
          auction_date?: string
          content?: Json
          content_id?: string
          conversion_rate?: number | null
          created_at?: string | null
          engagement_score?: number | null
          id?: string
          media?: Json | null
          platform?: string
          scheduled_time?: string | null
          status?: string | null
          type?: string
        }
        Relationships: []
      }
      conversion_attribution: {
        Row: {
          attributed_at: string | null
          campaign: string | null
          content_id: string
          id: string
          lead_id: string | null
          medium: string | null
          source: string | null
        }
        Insert: {
          attributed_at?: string | null
          campaign?: string | null
          content_id: string
          id?: string
          lead_id?: string | null
          medium?: string | null
          source?: string | null
        }
        Update: {
          attributed_at?: string | null
          campaign?: string | null
          content_id?: string
          id?: string
          lead_id?: string | null
          medium?: string | null
          source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversion_attribution_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      county_auction_config: {
        Row: {
          consecutive_failures: number | null
          county_name: string
          county_slug: string
          created_at: string | null
          daily_scrape_enabled: boolean | null
          fc_bid: string | null
          fc_calendar: string | null
          fc_courthouse_address: string | null
          fc_method: string
          fc_schedule: string | null
          fc_subdomain: string | null
          fc_url: string | null
          id: string
          is_active: boolean | null
          last_error: string | null
          last_fc_scraped_at: string | null
          last_td_scraped_at: string | null
          max_requests_per_run: number | null
          parser_type: string | null
          preferred_engine: string | null
          scrape_delay_ms: number | null
          scrape_priority: number | null
          scrape_window_end: string | null
          scrape_window_start: string | null
          state: string
          td_bid: string | null
          td_calendar: string | null
          td_method: string | null
          td_platform: string | null
          td_subdomain: string | null
          td_url: string | null
          updated_at: string | null
        }
        Insert: {
          consecutive_failures?: number | null
          county_name: string
          county_slug: string
          created_at?: string | null
          daily_scrape_enabled?: boolean | null
          fc_bid?: string | null
          fc_calendar?: string | null
          fc_courthouse_address?: string | null
          fc_method: string
          fc_schedule?: string | null
          fc_subdomain?: string | null
          fc_url?: string | null
          id?: string
          is_active?: boolean | null
          last_error?: string | null
          last_fc_scraped_at?: string | null
          last_td_scraped_at?: string | null
          max_requests_per_run?: number | null
          parser_type?: string | null
          preferred_engine?: string | null
          scrape_delay_ms?: number | null
          scrape_priority?: number | null
          scrape_window_end?: string | null
          scrape_window_start?: string | null
          state?: string
          td_bid?: string | null
          td_calendar?: string | null
          td_method?: string | null
          td_platform?: string | null
          td_subdomain?: string | null
          td_url?: string | null
          updated_at?: string | null
        }
        Update: {
          consecutive_failures?: number | null
          county_name?: string
          county_slug?: string
          created_at?: string | null
          daily_scrape_enabled?: boolean | null
          fc_bid?: string | null
          fc_calendar?: string | null
          fc_courthouse_address?: string | null
          fc_method?: string
          fc_schedule?: string | null
          fc_subdomain?: string | null
          fc_url?: string | null
          id?: string
          is_active?: boolean | null
          last_error?: string | null
          last_fc_scraped_at?: string | null
          last_td_scraped_at?: string | null
          max_requests_per_run?: number | null
          parser_type?: string | null
          preferred_engine?: string | null
          scrape_delay_ms?: number | null
          scrape_priority?: number | null
          scrape_window_end?: string | null
          scrape_window_start?: string | null
          state?: string
          td_bid?: string | null
          td_calendar?: string | null
          td_method?: string | null
          td_platform?: string | null
          td_subdomain?: string | null
          td_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      county_scrape_status: {
        Row: {
          avg_response_ms: number | null
          consecutive_failures: number | null
          county_slug: string
          created_at: string | null
          id: number
          is_healthy: boolean | null
          last_attempt: string | null
          last_error: string | null
          last_failure: string | null
          last_record_count: number | null
          last_success: string | null
          scrape_engine: string | null
          source_type: string
          total_failures: number | null
          total_successes: number | null
          updated_at: string | null
        }
        Insert: {
          avg_response_ms?: number | null
          consecutive_failures?: number | null
          county_slug: string
          created_at?: string | null
          id?: number
          is_healthy?: boolean | null
          last_attempt?: string | null
          last_error?: string | null
          last_failure?: string | null
          last_record_count?: number | null
          last_success?: string | null
          scrape_engine?: string | null
          source_type: string
          total_failures?: number | null
          total_successes?: number | null
          updated_at?: string | null
        }
        Update: {
          avg_response_ms?: number | null
          consecutive_failures?: number | null
          county_slug?: string
          created_at?: string | null
          id?: number
          is_healthy?: boolean | null
          last_attempt?: string | null
          last_error?: string | null
          last_failure?: string | null
          last_record_count?: number | null
          last_success?: string | null
          scrape_engine?: string | null
          source_type?: string
          total_failures?: number | null
          total_successes?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      credential_metadata: {
        Row: {
          created_at: string | null
          credential_type: string
          expires_at: string | null
          id: number
          is_active: boolean | null
          key_prefix: string
          last_rotated: string | null
          rotation_count: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          credential_type: string
          expires_at?: string | null
          id?: number
          is_active?: boolean | null
          key_prefix: string
          last_rotated?: string | null
          rotation_count?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          credential_type?: string
          expires_at?: string | null
          id?: number
          is_active?: boolean | null
          key_prefix?: string
          last_rotated?: string | null
          rotation_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      daily_metrics: {
        Row: {
          anomalies_foreclosure: number | null
          anomalies_tax_deed: number | null
          avg_match_score: number | null
          digest_delivery_rate: number | null
          errors_count: number | null
          foreclosure_counties_scraped: number | null
          foreclosure_properties_analyzed: number | null
          id: string
          llm_tokens_used: number | null
          metric_date: string | null
          pipeline_runtime_minutes: number | null
          tax_deed_certs_analyzed: number | null
          tax_deed_counties_scraped: number | null
        }
        Insert: {
          anomalies_foreclosure?: number | null
          anomalies_tax_deed?: number | null
          avg_match_score?: number | null
          digest_delivery_rate?: number | null
          errors_count?: number | null
          foreclosure_counties_scraped?: number | null
          foreclosure_properties_analyzed?: number | null
          id?: string
          llm_tokens_used?: number | null
          metric_date?: string | null
          pipeline_runtime_minutes?: number | null
          tax_deed_certs_analyzed?: number | null
          tax_deed_counties_scraped?: number | null
        }
        Update: {
          anomalies_foreclosure?: number | null
          anomalies_tax_deed?: number | null
          avg_match_score?: number | null
          digest_delivery_rate?: number | null
          errors_count?: number | null
          foreclosure_counties_scraped?: number | null
          foreclosure_properties_analyzed?: number | null
          id?: string
          llm_tokens_used?: number | null
          metric_date?: string | null
          pipeline_runtime_minutes?: number | null
          tax_deed_certs_analyzed?: number | null
          tax_deed_counties_scraped?: number | null
        }
        Relationships: []
      }
      daily_metrics_legacy: {
        Row: {
          abandonment_rate: number | null
          average_focus_quality: number | null
          completion_rate: number | null
          context_switches: number | null
          created_at: string | null
          date: string
          domains: Json | null
          energy_average: number | null
          id: number
          intervention_count: number | null
          learning_minutes: number | null
          peak_focus_hours: string[] | null
          productivity_score: number | null
          session_recommendation: string | null
          sleep_hours: number | null
          tasks_abandoned: number | null
          tasks_completed: number | null
          total_active_minutes: number | null
          user_id: number | null
          work_minutes: number | null
        }
        Insert: {
          abandonment_rate?: number | null
          average_focus_quality?: number | null
          completion_rate?: number | null
          context_switches?: number | null
          created_at?: string | null
          date: string
          domains?: Json | null
          energy_average?: number | null
          id?: number
          intervention_count?: number | null
          learning_minutes?: number | null
          peak_focus_hours?: string[] | null
          productivity_score?: number | null
          session_recommendation?: string | null
          sleep_hours?: number | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          total_active_minutes?: number | null
          user_id?: number | null
          work_minutes?: number | null
        }
        Update: {
          abandonment_rate?: number | null
          average_focus_quality?: number | null
          completion_rate?: number | null
          context_switches?: number | null
          created_at?: string | null
          date?: string
          domains?: Json | null
          energy_average?: number | null
          id?: number
          intervention_count?: number | null
          learning_minutes?: number | null
          peak_focus_hours?: string[] | null
          productivity_score?: number | null
          session_recommendation?: string | null
          sleep_hours?: number | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          total_active_minutes?: number | null
          user_id?: number | null
          work_minutes?: number | null
        }
        Relationships: []
      }
      deal_pipeline: {
        Row: {
          address: string | null
          arv_estimate: number | null
          confidence_pct: number | null
          county: string | null
          foreclosure_fields: Json | null
          id: string
          identifier: string
          key_risk: string | null
          key_signal: string | null
          outcome: string | null
          outcome_date: string | null
          outcome_price: number | null
          recommendation: string | null
          repair_estimate: number | null
          sale_date: string | null
          sale_type: string
          saved_date: string | null
          tax_deed_fields: Json | null
          user_id: string | null
          user_notes: string | null
        }
        Insert: {
          address?: string | null
          arv_estimate?: number | null
          confidence_pct?: number | null
          county?: string | null
          foreclosure_fields?: Json | null
          id?: string
          identifier: string
          key_risk?: string | null
          key_signal?: string | null
          outcome?: string | null
          outcome_date?: string | null
          outcome_price?: number | null
          recommendation?: string | null
          repair_estimate?: number | null
          sale_date?: string | null
          sale_type: string
          saved_date?: string | null
          tax_deed_fields?: Json | null
          user_id?: string | null
          user_notes?: string | null
        }
        Update: {
          address?: string | null
          arv_estimate?: number | null
          confidence_pct?: number | null
          county?: string | null
          foreclosure_fields?: Json | null
          id?: string
          identifier?: string
          key_risk?: string | null
          key_signal?: string | null
          outcome?: string | null
          outcome_date?: string | null
          outcome_price?: number | null
          recommendation?: string | null
          repair_estimate?: number | null
          sale_date?: string | null
          sale_type?: string
          saved_date?: string | null
          tax_deed_fields?: Json | null
          user_id?: string | null
          user_notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_pipeline_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      decision_log: {
        Row: {
          alternatives_considered: string[] | null
          correction_note: string | null
          decision: string
          decision_type: string
          id: number
          outcome: string | null
          reasoning: string | null
          session_id: string | null
          task_id: string | null
          timestamp: string | null
          was_correct: boolean | null
        }
        Insert: {
          alternatives_considered?: string[] | null
          correction_note?: string | null
          decision: string
          decision_type: string
          id?: number
          outcome?: string | null
          reasoning?: string | null
          session_id?: string | null
          task_id?: string | null
          timestamp?: string | null
          was_correct?: boolean | null
        }
        Update: {
          alternatives_considered?: string[] | null
          correction_note?: string | null
          decision?: string
          decision_type?: string
          id?: number
          outcome?: string | null
          reasoning?: string | null
          session_id?: string | null
          task_id?: string | null
          timestamp?: string | null
          was_correct?: boolean | null
        }
        Relationships: []
      }
      development_bonuses: {
        Row: {
          applicable_districts: string[] | null
          commitment_period: string | null
          conditions: string | null
          created_at: string | null
          density_bonus: string | null
          feature_name: string
          height_bonus: string | null
          id: number
          intensity_bonus: string | null
          jurisdiction_id: number
          min_requirement: string | null
          ordinance_id: number | null
          other_bonus: string | null
          parking_reduction: string | null
          program_name: string
          source_url: string | null
          table_reference: string | null
        }
        Insert: {
          applicable_districts?: string[] | null
          commitment_period?: string | null
          conditions?: string | null
          created_at?: string | null
          density_bonus?: string | null
          feature_name: string
          height_bonus?: string | null
          id?: number
          intensity_bonus?: string | null
          jurisdiction_id: number
          min_requirement?: string | null
          ordinance_id?: number | null
          other_bonus?: string | null
          parking_reduction?: string | null
          program_name: string
          source_url?: string | null
          table_reference?: string | null
        }
        Update: {
          applicable_districts?: string[] | null
          commitment_period?: string | null
          conditions?: string | null
          created_at?: string | null
          density_bonus?: string | null
          feature_name?: string
          height_bonus?: string | null
          id?: number
          intensity_bonus?: string | null
          jurisdiction_id?: number
          min_requirement?: string | null
          ordinance_id?: number | null
          other_bonus?: string | null
          parking_reduction?: string | null
          program_name?: string
          source_url?: string | null
          table_reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "development_bonuses_ordinance_id_fkey"
            columns: ["ordinance_id"]
            isOneToOne: false
            referencedRelation: "ordinances"
            referencedColumns: ["id"]
          },
        ]
      }
      digest_history: {
        Row: {
          created_at: string | null
          delivered_at: string | null
          digest_date: string | null
          foreclosure_matches: number | null
          id: string
          insight_sale_type: string | null
          insight_summary: string | null
          status: string | null
          tax_deed_matches: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          delivered_at?: string | null
          digest_date?: string | null
          foreclosure_matches?: number | null
          id?: string
          insight_sale_type?: string | null
          insight_summary?: string | null
          status?: string | null
          tax_deed_matches?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          delivered_at?: string | null
          digest_date?: string | null
          foreclosure_matches?: number | null
          id?: string
          insight_sale_type?: string | null
          insight_summary?: string | null
          status?: string | null
          tax_deed_matches?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "digest_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      dimensional_standards: {
        Row: {
          created_at: string | null
          id: number
          max_height_ft: number | null
          max_lot_coverage_pct: number | null
          min_lot_size_sf: number | null
          ordinance_section: string | null
          setback_front_ft: number | null
          setback_rear_ft: number | null
          setback_side_ft: number | null
          zoning_district_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          max_height_ft?: number | null
          max_lot_coverage_pct?: number | null
          min_lot_size_sf?: number | null
          ordinance_section?: string | null
          setback_front_ft?: number | null
          setback_rear_ft?: number | null
          setback_side_ft?: number | null
          zoning_district_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          max_height_ft?: number | null
          max_lot_coverage_pct?: number | null
          min_lot_size_sf?: number | null
          ordinance_section?: string | null
          setback_front_ft?: number | null
          setback_rear_ft?: number | null
          setback_side_ft?: number | null
          zoning_district_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "dimensional_standards_zoning_district_id_fkey"
            columns: ["zoning_district_id"]
            isOneToOne: true
            referencedRelation: "zoning_districts"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          content_summary: string | null
          created_at: string | null
          created_in_chat: string | null
          document_name: string
          document_type: string | null
          file_path: string | null
          full_url: string | null
          id: number
          metadata: Json | null
          project: string | null
          repo: string | null
          review_notes: string | null
          review_status: string | null
          reviewed_at: string | null
          updated_at: string | null
        }
        Insert: {
          content_summary?: string | null
          created_at?: string | null
          created_in_chat?: string | null
          document_name: string
          document_type?: string | null
          file_path?: string | null
          full_url?: string | null
          id?: number
          metadata?: Json | null
          project?: string | null
          repo?: string | null
          review_notes?: string | null
          review_status?: string | null
          reviewed_at?: string | null
          updated_at?: string | null
        }
        Update: {
          content_summary?: string | null
          created_at?: string | null
          created_in_chat?: string | null
          document_name?: string
          document_type?: string | null
          file_path?: string | null
          full_url?: string | null
          id?: number
          metadata?: Json | null
          project?: string | null
          repo?: string | null
          review_notes?: string | null
          review_status?: string | null
          reviewed_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      email_queue: {
        Row: {
          content_id: string
          created_at: string | null
          html: string
          id: string
          recipients_count: number | null
          scheduled_time: string | null
          sent_time: string | null
          status: string | null
          subject: string
        }
        Insert: {
          content_id: string
          created_at?: string | null
          html: string
          id?: string
          recipients_count?: number | null
          scheduled_time?: string | null
          sent_time?: string | null
          status?: string | null
          subject: string
        }
        Update: {
          content_id?: string
          created_at?: string | null
          html?: string
          id?: string
          recipients_count?: number | null
          scheduled_time?: string | null
          sent_time?: string | null
          status?: string | null
          subject?: string
        }
        Relationships: []
      }
      engagement_metrics: {
        Row: {
          content_id: string
          engagement_rate: number | null
          fetched_at: string | null
          id: string
          metrics: Json
          platform: string
        }
        Insert: {
          content_id: string
          engagement_rate?: number | null
          fetched_at?: string | null
          id?: string
          metrics: Json
          platform: string
        }
        Update: {
          content_id?: string
          engagement_rate?: number | null
          fetched_at?: string | null
          id?: string
          metrics?: Json
          platform?: string
        }
        Relationships: []
      }
      entitlement_timelines: {
        Row: {
          base_fee: number | null
          created_at: string | null
          department_email: string | null
          department_name: string | null
          department_phone: string | null
          id: number
          jurisdiction_id: number
          last_verified: string | null
          per_acre_fee: number | null
          per_unit_fee: number | null
          process_type: string
          source_url: string | null
          steps: Json
          typical_days_avg: number | null
          typical_days_max: number | null
          typical_days_min: number | null
        }
        Insert: {
          base_fee?: number | null
          created_at?: string | null
          department_email?: string | null
          department_name?: string | null
          department_phone?: string | null
          id?: number
          jurisdiction_id: number
          last_verified?: string | null
          per_acre_fee?: number | null
          per_unit_fee?: number | null
          process_type: string
          source_url?: string | null
          steps: Json
          typical_days_avg?: number | null
          typical_days_max?: number | null
          typical_days_min?: number | null
        }
        Update: {
          base_fee?: number | null
          created_at?: string | null
          department_email?: string | null
          department_name?: string | null
          department_phone?: string | null
          id?: number
          jurisdiction_id?: number
          last_verified?: string | null
          per_acre_fee?: number | null
          per_unit_fee?: number | null
          process_type?: string
          source_url?: string | null
          steps?: Json
          typical_days_avg?: number | null
          typical_days_max?: number | null
          typical_days_min?: number | null
        }
        Relationships: []
      }
      environmental_assessments: {
        Row: {
          analysis_id: string | null
          contamination_risk: string | null
          created_at: string | null
          environmental_score: number | null
          flood_risk_score: number | null
          flood_zone: string | null
          historical_use: string | null
          id: string
          phase1_recommended: boolean | null
          risk_factors: Json | null
          wetland_present: boolean | null
        }
        Insert: {
          analysis_id?: string | null
          contamination_risk?: string | null
          created_at?: string | null
          environmental_score?: number | null
          flood_risk_score?: number | null
          flood_zone?: string | null
          historical_use?: string | null
          id?: string
          phase1_recommended?: boolean | null
          risk_factors?: Json | null
          wetland_present?: boolean | null
        }
        Update: {
          analysis_id?: string | null
          contamination_risk?: string | null
          created_at?: string | null
          environmental_score?: number | null
          flood_risk_score?: number | null
          flood_zone?: string | null
          historical_use?: string | null
          id?: string
          phase1_recommended?: boolean | null
          risk_factors?: Json | null
          wetland_present?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "environmental_assessments_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "property_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      everest_ascent_stages: {
        Row: {
          branded_name: string | null
          created_at: string | null
          data_sources: string[] | null
          description: string | null
          id: string
          is_flagship: boolean | null
          key_outputs: string[] | null
          langgraph_node: string | null
          methodology_version_id: string | null
          phase: string
          stage_name: string
          stage_number: number
          state_type: string | null
        }
        Insert: {
          branded_name?: string | null
          created_at?: string | null
          data_sources?: string[] | null
          description?: string | null
          id?: string
          is_flagship?: boolean | null
          key_outputs?: string[] | null
          langgraph_node?: string | null
          methodology_version_id?: string | null
          phase: string
          stage_name: string
          stage_number: number
          state_type?: string | null
        }
        Update: {
          branded_name?: string | null
          created_at?: string | null
          data_sources?: string[] | null
          description?: string | null
          id?: string
          is_flagship?: boolean | null
          key_outputs?: string[] | null
          langgraph_node?: string | null
          methodology_version_id?: string | null
          phase?: string
          stage_name?: string
          stage_number?: number
          state_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "everest_ascent_stages_methodology_version_id_fkey"
            columns: ["methodology_version_id"]
            isOneToOne: false
            referencedRelation: "methodology_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      family_events: {
        Row: {
          all_day: boolean | null
          created_at: string | null
          end_date: string | null
          event_type: string | null
          id: number
          location: string | null
          notes: string | null
          participants: string[] | null
          start_date: string
          title: string
        }
        Insert: {
          all_day?: boolean | null
          created_at?: string | null
          end_date?: string | null
          event_type?: string | null
          id?: number
          location?: string | null
          notes?: string | null
          participants?: string[] | null
          start_date: string
          title: string
        }
        Update: {
          all_day?: boolean | null
          created_at?: string | null
          end_date?: string | null
          event_type?: string | null
          id?: number
          location?: string | null
          notes?: string | null
          participants?: string[] | null
          start_date?: string
          title?: string
        }
        Relationships: []
      }
      firecrawl_metrics: {
        Row: {
          auction_date: string | null
          created_at: string | null
          credits_used: number
          error_message: string | null
          estimated_cost_usd: number | null
          execution_time_ms: number | null
          id: number
          insights_count: number | null
          property_id: string | null
          searches_count: number | null
          stage: string | null
          status: string | null
          zip_code: string | null
        }
        Insert: {
          auction_date?: string | null
          created_at?: string | null
          credits_used: number
          error_message?: string | null
          estimated_cost_usd?: number | null
          execution_time_ms?: number | null
          id?: number
          insights_count?: number | null
          property_id?: string | null
          searches_count?: number | null
          stage?: string | null
          status?: string | null
          zip_code?: string | null
        }
        Update: {
          auction_date?: string | null
          created_at?: string | null
          credits_used?: number
          error_message?: string | null
          estimated_cost_usd?: number | null
          execution_time_ms?: number | null
          id?: number
          insights_count?: number | null
          property_id?: string | null
          searches_count?: number | null
          stage?: string | null
          status?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      fl_parcels: {
        Row: {
          act_yr_blt: number | null
          av_hmstd: number | null
          av_non_hms: number | null
          av_nsd: number | null
          av_sd: number | null
          centroid_lat: number | null
          centroid_lng: number | null
          co_no: number
          const_clas: string | null
          dor_uc: string | null
          eff_yr_blt: number | null
          future_land_use: string | null
          grp_no: string | null
          id: number
          imp_qual: string | null
          jv: number | null
          jv_chng: number | null
          jv_hmstd: number | null
          jv_non_hms: number | null
          lnd_sqfoot: number | null
          lnd_unts_c: string | null
          lnd_val: number | null
          municipality: string | null
          no_buldng: number | null
          no_lnd_unt: number | null
          no_res_unt: number | null
          own_addr1: string | null
          own_city: string | null
          own_name: string | null
          own_state: string | null
          own_zipcd: string | null
          pa_uc: string | null
          parcel_id: string
          photo_url: string | null
          phy_addr1: string | null
          phy_addr2: string | null
          phy_city: string | null
          phy_zipcd: string | null
          qual_cd1: string | null
          sale_mo1: number | null
          sale_prc1: number | null
          sale_yr1: number | null
          scraped_at: string | null
          spass_cd: string | null
          spec_feat_: number | null
          tot_lvg_ar: number | null
          tv_nsd: number | null
          tv_sd: number | null
          updated_at: string | null
          zone_code: string | null
        }
        Insert: {
          act_yr_blt?: number | null
          av_hmstd?: number | null
          av_non_hms?: number | null
          av_nsd?: number | null
          av_sd?: number | null
          centroid_lat?: number | null
          centroid_lng?: number | null
          co_no: number
          const_clas?: string | null
          dor_uc?: string | null
          eff_yr_blt?: number | null
          future_land_use?: string | null
          grp_no?: string | null
          id?: number
          imp_qual?: string | null
          jv?: number | null
          jv_chng?: number | null
          jv_hmstd?: number | null
          jv_non_hms?: number | null
          lnd_sqfoot?: number | null
          lnd_unts_c?: string | null
          lnd_val?: number | null
          municipality?: string | null
          no_buldng?: number | null
          no_lnd_unt?: number | null
          no_res_unt?: number | null
          own_addr1?: string | null
          own_city?: string | null
          own_name?: string | null
          own_state?: string | null
          own_zipcd?: string | null
          pa_uc?: string | null
          parcel_id: string
          photo_url?: string | null
          phy_addr1?: string | null
          phy_addr2?: string | null
          phy_city?: string | null
          phy_zipcd?: string | null
          qual_cd1?: string | null
          sale_mo1?: number | null
          sale_prc1?: number | null
          sale_yr1?: number | null
          scraped_at?: string | null
          spass_cd?: string | null
          spec_feat_?: number | null
          tot_lvg_ar?: number | null
          tv_nsd?: number | null
          tv_sd?: number | null
          updated_at?: string | null
          zone_code?: string | null
        }
        Update: {
          act_yr_blt?: number | null
          av_hmstd?: number | null
          av_non_hms?: number | null
          av_nsd?: number | null
          av_sd?: number | null
          centroid_lat?: number | null
          centroid_lng?: number | null
          co_no?: number
          const_clas?: string | null
          dor_uc?: string | null
          eff_yr_blt?: number | null
          future_land_use?: string | null
          grp_no?: string | null
          id?: number
          imp_qual?: string | null
          jv?: number | null
          jv_chng?: number | null
          jv_hmstd?: number | null
          jv_non_hms?: number | null
          lnd_sqfoot?: number | null
          lnd_unts_c?: string | null
          lnd_val?: number | null
          municipality?: string | null
          no_buldng?: number | null
          no_lnd_unt?: number | null
          no_res_unt?: number | null
          own_addr1?: string | null
          own_city?: string | null
          own_name?: string | null
          own_state?: string | null
          own_zipcd?: string | null
          pa_uc?: string | null
          parcel_id?: string
          photo_url?: string | null
          phy_addr1?: string | null
          phy_addr2?: string | null
          phy_city?: string | null
          phy_zipcd?: string | null
          qual_cd1?: string | null
          sale_mo1?: number | null
          sale_prc1?: number | null
          sale_yr1?: number | null
          scraped_at?: string | null
          spass_cd?: string | null
          spec_feat_?: number | null
          tot_lvg_ar?: number | null
          tv_nsd?: number | null
          tv_sd?: number | null
          updated_at?: string | null
          zone_code?: string | null
        }
        Relationships: []
      }
      flywheel_metrics: {
        Row: {
          content_generated: number | null
          conversion_rate: number | null
          cost_per_lead: number | null
          created_at: string | null
          id: string
          leads_generated: number | null
          metric_date: string
          posts_published: number | null
          roi: number | null
          total_clicks: number | null
          total_engagements: number | null
          total_impressions: number | null
        }
        Insert: {
          content_generated?: number | null
          conversion_rate?: number | null
          cost_per_lead?: number | null
          created_at?: string | null
          id?: string
          leads_generated?: number | null
          metric_date: string
          posts_published?: number | null
          roi?: number | null
          total_clicks?: number | null
          total_engagements?: number | null
          total_impressions?: number | null
        }
        Update: {
          content_generated?: number | null
          conversion_rate?: number | null
          cost_per_lead?: number | null
          created_at?: string | null
          id?: string
          leads_generated?: number | null
          metric_date?: string
          posts_published?: number | null
          roi?: number | null
          total_clicks?: number | null
          total_engagements?: number | null
          total_impressions?: number | null
        }
        Relationships: []
      }
      foreclosure_auctions: {
        Row: {
          actual_sale_price: number | null
          assessed_value: number | null
          baths: number | null
          beds: number | null
          case_number: string
          county: string | null
          created_at: string | null
          decision_reasoning: string | null
          defendant: string | null
          disposition: string | null
          disposition_updated_at: string | null
          id: number
          judgment_amount: number | null
          just_value: number | null
          legal_description: string | null
          max_bid: number | null
          parcel_id: string | null
          photo_url: string | null
          plaintiff: string | null
          property_address: string | null
          recommendation: string | null
          sale_date: string | null
          sale_date_actual: string | null
          scraped_at: string | null
          sqft: number | null
          status: string | null
          winning_bidder_type: string | null
          year_built: number | null
        }
        Insert: {
          actual_sale_price?: number | null
          assessed_value?: number | null
          baths?: number | null
          beds?: number | null
          case_number: string
          county?: string | null
          created_at?: string | null
          decision_reasoning?: string | null
          defendant?: string | null
          disposition?: string | null
          disposition_updated_at?: string | null
          id?: number
          judgment_amount?: number | null
          just_value?: number | null
          legal_description?: string | null
          max_bid?: number | null
          parcel_id?: string | null
          photo_url?: string | null
          plaintiff?: string | null
          property_address?: string | null
          recommendation?: string | null
          sale_date?: string | null
          sale_date_actual?: string | null
          scraped_at?: string | null
          sqft?: number | null
          status?: string | null
          winning_bidder_type?: string | null
          year_built?: number | null
        }
        Update: {
          actual_sale_price?: number | null
          assessed_value?: number | null
          baths?: number | null
          beds?: number | null
          case_number?: string
          county?: string | null
          created_at?: string | null
          decision_reasoning?: string | null
          defendant?: string | null
          disposition?: string | null
          disposition_updated_at?: string | null
          id?: number
          judgment_amount?: number | null
          just_value?: number | null
          legal_description?: string | null
          max_bid?: number | null
          parcel_id?: string | null
          photo_url?: string | null
          plaintiff?: string | null
          property_address?: string | null
          recommendation?: string | null
          sale_date?: string | null
          sale_date_actual?: string | null
          scraped_at?: string | null
          sqft?: number | null
          status?: string | null
          winning_bidder_type?: string | null
          year_built?: number | null
        }
        Relationships: []
      }
      github_repos: {
        Row: {
          created_at: string | null
          description: string | null
          file_count: number | null
          id: number
          is_active: boolean | null
          last_commit_date: string | null
          last_commit_message: string | null
          last_commit_sha: string | null
          metadata: Json | null
          primary_language: string | null
          project: string | null
          repo_name: string
          repo_url: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          file_count?: number | null
          id?: number
          is_active?: boolean | null
          last_commit_date?: string | null
          last_commit_message?: string | null
          last_commit_sha?: string | null
          metadata?: Json | null
          primary_language?: string | null
          project?: string | null
          repo_name: string
          repo_url: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          file_count?: number | null
          id?: number
          is_active?: boolean | null
          last_commit_date?: string | null
          last_commit_message?: string | null
          last_commit_sha?: string | null
          metadata?: Json | null
          primary_language?: string | null
          project?: string | null
          repo_name?: string
          repo_url?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      goals: {
        Row: {
          category: string | null
          created_at: string | null
          current_value: number | null
          description: string | null
          domain: string | null
          id: number
          start_date: string | null
          status: string | null
          target_date: string | null
          target_value: number | null
          title: string
          user_id: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          current_value?: number | null
          description?: string | null
          domain?: string | null
          id?: number
          start_date?: string | null
          status?: string | null
          target_date?: string | null
          target_value?: number | null
          title: string
          user_id?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          current_value?: number | null
          description?: string | null
          domain?: string | null
          id?: number
          start_date?: string | null
          status?: string | null
          target_date?: string | null
          target_value?: number | null
          title?: string
          user_id?: number | null
        }
        Relationships: []
      }
      hbu_analyses: {
        Row: {
          analysis_id: string | null
          created_at: string | null
          current_use: string | null
          current_use_value: number | null
          development_scenarios: Json | null
          financially_feasible: boolean | null
          hbu_potential_value: number | null
          hbu_recommended: string | null
          id: string
          legally_permissible: boolean | null
          maximally_productive: boolean | null
          physically_possible: boolean | null
          rezoning_probability: number | null
          rezoning_required: boolean | null
          rezoning_timeline_months: number | null
          value_uplift_pct: number | null
        }
        Insert: {
          analysis_id?: string | null
          created_at?: string | null
          current_use?: string | null
          current_use_value?: number | null
          development_scenarios?: Json | null
          financially_feasible?: boolean | null
          hbu_potential_value?: number | null
          hbu_recommended?: string | null
          id?: string
          legally_permissible?: boolean | null
          maximally_productive?: boolean | null
          physically_possible?: boolean | null
          rezoning_probability?: number | null
          rezoning_required?: boolean | null
          rezoning_timeline_months?: number | null
          value_uplift_pct?: number | null
        }
        Update: {
          analysis_id?: string | null
          created_at?: string | null
          current_use?: string | null
          current_use_value?: number | null
          development_scenarios?: Json | null
          financially_feasible?: boolean | null
          hbu_potential_value?: number | null
          hbu_recommended?: string | null
          id?: string
          legally_permissible?: boolean | null
          maximally_productive?: boolean | null
          physically_possible?: boolean | null
          rezoning_probability?: number | null
          rezoning_required?: boolean | null
          rezoning_timeline_months?: number | null
          value_uplift_pct?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "hbu_analyses_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "property_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      health_logs: {
        Row: {
          created_at: string | null
          date: string
          energy_level: number | null
          exercise_minutes: number | null
          exercise_type: string | null
          focus_quality: number | null
          id: number
          medication_taken: boolean | null
          mood: number | null
          notes: string | null
          sleep_hours: number | null
          sleep_quality: number | null
          stress_level: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          date: string
          energy_level?: number | null
          exercise_minutes?: number | null
          exercise_type?: string | null
          focus_quality?: number | null
          id?: number
          medication_taken?: boolean | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          date?: string
          energy_level?: number | null
          exercise_minutes?: number | null
          exercise_type?: string | null
          focus_quality?: number | null
          id?: number
          medication_taken?: boolean | null
          mood?: number | null
          notes?: string | null
          sleep_hours?: number | null
          sleep_quality?: number | null
          stress_level?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
      historical_auctions: {
        Row: {
          address: string | null
          auction_date: string
          auction_id: string
          auction_type: string | null
          bathrooms: number | null
          bedrooms: number | null
          buyer_name: string | null
          buyer_type: string | null
          case_number: string | null
          city: string | null
          county: string | null
          created_at: string | null
          defendant: string | null
          final_judgment: number | null
          id: string
          market_value: number | null
          num_bidders: number | null
          opening_bid: number | null
          parcel_id: string | null
          plaintiff: string | null
          scraped_at: string | null
          sqft: number | null
          status: string | null
          winning_bid: number | null
          year_built: number | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          auction_date: string
          auction_id: string
          auction_type?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          buyer_name?: string | null
          buyer_type?: string | null
          case_number?: string | null
          city?: string | null
          county?: string | null
          created_at?: string | null
          defendant?: string | null
          final_judgment?: number | null
          id?: string
          market_value?: number | null
          num_bidders?: number | null
          opening_bid?: number | null
          parcel_id?: string | null
          plaintiff?: string | null
          scraped_at?: string | null
          sqft?: number | null
          status?: string | null
          winning_bid?: number | null
          year_built?: number | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          auction_date?: string
          auction_id?: string
          auction_type?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          buyer_name?: string | null
          buyer_type?: string | null
          case_number?: string | null
          city?: string | null
          county?: string | null
          created_at?: string | null
          defendant?: string | null
          final_judgment?: number | null
          id?: string
          market_value?: number | null
          num_bidders?: number | null
          opening_bid?: number | null
          parcel_id?: string | null
          plaintiff?: string | null
          scraped_at?: string | null
          sqft?: number | null
          status?: string | null
          winning_bid?: number | null
          year_built?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      il_custom_areas: {
        Row: {
          access_count: number | null
          alert_enabled: boolean | null
          alert_frequency: string | null
          area_description: string | null
          area_name: string
          area_polygon: unknown
          created_at: string | null
          id: number
          last_accessed_at: string | null
          saved_filters: Json | null
          user_id: string | null
        }
        Insert: {
          access_count?: number | null
          alert_enabled?: boolean | null
          alert_frequency?: string | null
          area_description?: string | null
          area_name: string
          area_polygon: unknown
          created_at?: string | null
          id?: number
          last_accessed_at?: string | null
          saved_filters?: Json | null
          user_id?: string | null
        }
        Update: {
          access_count?: number | null
          alert_enabled?: boolean | null
          alert_frequency?: string | null
          area_description?: string | null
          area_name?: string
          area_polygon?: unknown
          created_at?: string | null
          id?: number
          last_accessed_at?: string | null
          saved_filters?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      il_market_signals: {
        Row: {
          active_listings: number | null
          area_name: string
          area_polygon: unknown
          area_type: string
          avg_days_on_market: number | null
          avg_price: number | null
          avg_price_per_sqm: number | null
          calculated_at: string | null
          calculation_period_end: string
          calculation_period_start: string
          id: number
          inventory_months: number | null
          listing_type: string | null
          market_status: string | null
          marketing_intensity: string | null
          max_price: number | null
          median_days_on_market: number | null
          median_price: number | null
          median_price_per_sqm: number | null
          min_price: number | null
          monthly_sales_volume: number | null
          new_vs_used_ratio: number | null
          outlier_percentage: number | null
          price_change_1m_pct: number | null
          price_change_1y_pct: number | null
          price_change_3m_pct: number | null
          price_trend: string | null
          sales_velocity: string | null
          transaction_count: number | null
        }
        Insert: {
          active_listings?: number | null
          area_name: string
          area_polygon?: unknown
          area_type: string
          avg_days_on_market?: number | null
          avg_price?: number | null
          avg_price_per_sqm?: number | null
          calculated_at?: string | null
          calculation_period_end: string
          calculation_period_start: string
          id?: number
          inventory_months?: number | null
          listing_type?: string | null
          market_status?: string | null
          marketing_intensity?: string | null
          max_price?: number | null
          median_days_on_market?: number | null
          median_price?: number | null
          median_price_per_sqm?: number | null
          min_price?: number | null
          monthly_sales_volume?: number | null
          new_vs_used_ratio?: number | null
          outlier_percentage?: number | null
          price_change_1m_pct?: number | null
          price_change_1y_pct?: number | null
          price_change_3m_pct?: number | null
          price_trend?: string | null
          sales_velocity?: string | null
          transaction_count?: number | null
        }
        Update: {
          active_listings?: number | null
          area_name?: string
          area_polygon?: unknown
          area_type?: string
          avg_days_on_market?: number | null
          avg_price?: number | null
          avg_price_per_sqm?: number | null
          calculated_at?: string | null
          calculation_period_end?: string
          calculation_period_start?: string
          id?: number
          inventory_months?: number | null
          listing_type?: string | null
          market_status?: string | null
          marketing_intensity?: string | null
          max_price?: number | null
          median_days_on_market?: number | null
          median_price?: number | null
          median_price_per_sqm?: number | null
          min_price?: number | null
          monthly_sales_volume?: number | null
          new_vs_used_ratio?: number | null
          outlier_percentage?: number | null
          price_change_1m_pct?: number | null
          price_change_1y_pct?: number | null
          price_change_3m_pct?: number | null
          price_trend?: string | null
          sales_velocity?: string | null
          transaction_count?: number | null
        }
        Relationships: []
      }
      il_properties: {
        Row: {
          address_city: string
          address_neighborhood: string | null
          address_street: string | null
          agent_email: string | null
          agent_name: string | null
          agent_phone: string | null
          building_floors: number | null
          construction_status: string | null
          currency: string | null
          days_on_market: number | null
          description_en: string | null
          description_he: string | null
          external_id: string | null
          features: Json | null
          first_seen_at: string | null
          floor: number | null
          id: number
          images: string[] | null
          lat: number | null
          listing_type: string
          listing_url: string | null
          location: unknown
          long: number | null
          parking_spots: number | null
          price_current: number | null
          price_original: number | null
          price_per_sqm: number | null
          property_type: string | null
          rooms: number | null
          scraped_at: string | null
          source: string
          square_meters: number | null
          status: string | null
          status_changed_at: string | null
          updated_at: string | null
          year_built: number | null
        }
        Insert: {
          address_city: string
          address_neighborhood?: string | null
          address_street?: string | null
          agent_email?: string | null
          agent_name?: string | null
          agent_phone?: string | null
          building_floors?: number | null
          construction_status?: string | null
          currency?: string | null
          days_on_market?: number | null
          description_en?: string | null
          description_he?: string | null
          external_id?: string | null
          features?: Json | null
          first_seen_at?: string | null
          floor?: number | null
          id?: number
          images?: string[] | null
          lat?: number | null
          listing_type: string
          listing_url?: string | null
          location?: unknown
          long?: number | null
          parking_spots?: number | null
          price_current?: number | null
          price_original?: number | null
          price_per_sqm?: number | null
          property_type?: string | null
          rooms?: number | null
          scraped_at?: string | null
          source: string
          square_meters?: number | null
          status?: string | null
          status_changed_at?: string | null
          updated_at?: string | null
          year_built?: number | null
        }
        Update: {
          address_city?: string
          address_neighborhood?: string | null
          address_street?: string | null
          agent_email?: string | null
          agent_name?: string | null
          agent_phone?: string | null
          building_floors?: number | null
          construction_status?: string | null
          currency?: string | null
          days_on_market?: number | null
          description_en?: string | null
          description_he?: string | null
          external_id?: string | null
          features?: Json | null
          first_seen_at?: string | null
          floor?: number | null
          id?: number
          images?: string[] | null
          lat?: number | null
          listing_type?: string
          listing_url?: string | null
          location?: unknown
          long?: number | null
          parking_spots?: number | null
          price_current?: number | null
          price_original?: number | null
          price_per_sqm?: number | null
          property_type?: string | null
          rooms?: number | null
          scraped_at?: string | null
          source?: string
          square_meters?: number | null
          status?: string | null
          status_changed_at?: string | null
          updated_at?: string | null
          year_built?: number | null
        }
        Relationships: []
      }
      il_scraping_logs: {
        Row: {
          duration_seconds: number | null
          end_time: string | null
          error_log: Json | null
          errors_count: number | null
          github_run_id: string | null
          id: number
          listing_type: string | null
          properties_new: number | null
          properties_scraped: number | null
          properties_updated: number | null
          session_id: string | null
          source: string
          start_time: string
          status: string | null
          triggered_by: string | null
        }
        Insert: {
          duration_seconds?: number | null
          end_time?: string | null
          error_log?: Json | null
          errors_count?: number | null
          github_run_id?: string | null
          id?: number
          listing_type?: string | null
          properties_new?: number | null
          properties_scraped?: number | null
          properties_updated?: number | null
          session_id?: string | null
          source: string
          start_time: string
          status?: string | null
          triggered_by?: string | null
        }
        Update: {
          duration_seconds?: number | null
          end_time?: string | null
          error_log?: Json | null
          errors_count?: number | null
          github_run_id?: string | null
          id?: number
          listing_type?: string | null
          properties_new?: number | null
          properties_scraped?: number | null
          properties_updated?: number | null
          session_id?: string | null
          source?: string
          start_time?: string
          status?: string | null
          triggered_by?: string | null
        }
        Relationships: []
      }
      il_transactions: {
        Row: {
          address: string
          buyer_name: string | null
          city: string
          floor: number | null
          id: number
          is_outlier: boolean | null
          location: unknown
          neighborhood: string | null
          outlier_detected_at: string | null
          outlier_reason: string | null
          price_per_sqm: number | null
          property_type: string | null
          rooms: number | null
          sale_date: string
          sale_price: number
          scraped_at: string | null
          seller_name: string | null
          source: string | null
          square_meters: number | null
          tax_paid: number | null
          transaction_id: string | null
          year_built: number | null
        }
        Insert: {
          address: string
          buyer_name?: string | null
          city: string
          floor?: number | null
          id?: number
          is_outlier?: boolean | null
          location?: unknown
          neighborhood?: string | null
          outlier_detected_at?: string | null
          outlier_reason?: string | null
          price_per_sqm?: number | null
          property_type?: string | null
          rooms?: number | null
          sale_date: string
          sale_price: number
          scraped_at?: string | null
          seller_name?: string | null
          source?: string | null
          square_meters?: number | null
          tax_paid?: number | null
          transaction_id?: string | null
          year_built?: number | null
        }
        Update: {
          address?: string
          buyer_name?: string | null
          city?: string
          floor?: number | null
          id?: number
          is_outlier?: boolean | null
          location?: unknown
          neighborhood?: string | null
          outlier_detected_at?: string | null
          outlier_reason?: string | null
          price_per_sqm?: number | null
          property_type?: string | null
          rooms?: number | null
          sale_date?: string
          sale_price?: number
          scraped_at?: string | null
          seller_name?: string | null
          source?: string | null
          square_meters?: number | null
          tax_paid?: number | null
          transaction_id?: string | null
          year_built?: number | null
        }
        Relationships: []
      }
      insights: {
        Row: {
          anomaly_type: string | null
          county: string | null
          description: string | null
          detected_at: string | null
          id: string
          properties_affected: Json | null
          sale_type: string
          std_deviation: number | null
        }
        Insert: {
          anomaly_type?: string | null
          county?: string | null
          description?: string | null
          detected_at?: string | null
          id?: string
          properties_affected?: Json | null
          sale_type: string
          std_deviation?: number | null
        }
        Update: {
          anomaly_type?: string | null
          county?: string | null
          description?: string | null
          detected_at?: string | null
          id?: string
          properties_affected?: Json | null
          sale_type?: string
          std_deviation?: number | null
        }
        Relationships: []
      }
      insights_legacy: {
        Row: {
          action_taken: string | null
          confidence: number | null
          created_at: string | null
          data: Json | null
          description: string | null
          id: number
          insight_type: string | null
          last_occurred_at: string | null
          lesson_learned: string | null
          priority: string | null
          recurrence_count: number | null
          related_date: string | null
          source: string | null
          status: string | null
          title: string
          type: string | null
          user_id: number | null
        }
        Insert: {
          action_taken?: string | null
          confidence?: number | null
          created_at?: string | null
          data?: Json | null
          description?: string | null
          id?: number
          insight_type?: string | null
          last_occurred_at?: string | null
          lesson_learned?: string | null
          priority?: string | null
          recurrence_count?: number | null
          related_date?: string | null
          source?: string | null
          status?: string | null
          title?: string
          type?: string | null
          user_id?: number | null
        }
        Update: {
          action_taken?: string | null
          confidence?: number | null
          created_at?: string | null
          data?: Json | null
          description?: string | null
          id?: number
          insight_type?: string | null
          last_occurred_at?: string | null
          lesson_learned?: string | null
          priority?: string | null
          recurrence_count?: number | null
          related_date?: string | null
          source?: string | null
          status?: string | null
          title?: string
          type?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      insurance_applications: {
        Row: {
          application_date: string | null
          application_type: string | null
          confirmation_number: string | null
          coverage_end_date: string | null
          coverage_start_date: string | null
          created_at: string | null
          decision_date: string | null
          documents_submitted: Json | null
          id: string
          monthly_premium: number | null
          notes: string | null
          program: string
          status: string | null
        }
        Insert: {
          application_date?: string | null
          application_type?: string | null
          confirmation_number?: string | null
          coverage_end_date?: string | null
          coverage_start_date?: string | null
          created_at?: string | null
          decision_date?: string | null
          documents_submitted?: Json | null
          id?: string
          monthly_premium?: number | null
          notes?: string | null
          program: string
          status?: string | null
        }
        Update: {
          application_date?: string | null
          application_type?: string | null
          confirmation_number?: string | null
          coverage_end_date?: string | null
          coverage_start_date?: string | null
          created_at?: string | null
          decision_date?: string | null
          documents_submitted?: Json | null
          id?: string
          monthly_premium?: number | null
          notes?: string | null
          program?: string
          status?: string | null
        }
        Relationships: []
      }
      insurance_thresholds: {
        Row: {
          asset_limit: number | null
          created_at: string | null
          fpl_percentage: number | null
          household_size: number | null
          id: string
          income_limit_annual: number | null
          income_limit_monthly: number | null
          notes: string | null
          program: string
          state: string | null
          year: number
        }
        Insert: {
          asset_limit?: number | null
          created_at?: string | null
          fpl_percentage?: number | null
          household_size?: number | null
          id?: string
          income_limit_annual?: number | null
          income_limit_monthly?: number | null
          notes?: string | null
          program: string
          state?: string | null
          year: number
        }
        Update: {
          asset_limit?: number | null
          created_at?: string | null
          fpl_percentage?: number | null
          household_size?: number | null
          id?: string
          income_limit_annual?: number | null
          income_limit_monthly?: number | null
          notes?: string | null
          program?: string
          state?: string | null
          year?: number
        }
        Relationships: []
      }
      intervention_log: {
        Row: {
          action_taken: string | null
          intervention_id: number
          level: number | null
          message: string | null
          task_abandoned: boolean | null
          task_deferred: boolean | null
          task_id: string | null
          task_resumed: boolean | null
          trigger_type: string | null
          triggered_at: string | null
          user_response: string | null
        }
        Insert: {
          action_taken?: string | null
          intervention_id?: number
          level?: number | null
          message?: string | null
          task_abandoned?: boolean | null
          task_deferred?: boolean | null
          task_id?: string | null
          task_resumed?: boolean | null
          trigger_type?: string | null
          triggered_at?: string | null
          user_response?: string | null
        }
        Update: {
          action_taken?: string | null
          intervention_id?: number
          level?: number | null
          message?: string | null
          task_abandoned?: boolean | null
          task_deferred?: boolean | null
          task_id?: string | null
          task_resumed?: boolean | null
          trigger_type?: string | null
          triggered_at?: string | null
          user_response?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "intervention_log_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "active_tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "intervention_log_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "v_tasks_needing_attention"
            referencedColumns: ["task_id"]
          },
        ]
      }
      ip_copyrights: {
        Row: {
          actual_cost: number | null
          brand_id: string | null
          created_at: string | null
          creation_date: string | null
          estimated_cost: number | null
          id: string
          notes: string | null
          registration_date: string | null
          registration_number: string | null
          status: string | null
          updated_at: string | null
          work_title: string
          work_type: string | null
        }
        Insert: {
          actual_cost?: number | null
          brand_id?: string | null
          created_at?: string | null
          creation_date?: string | null
          estimated_cost?: number | null
          id?: string
          notes?: string | null
          registration_date?: string | null
          registration_number?: string | null
          status?: string | null
          updated_at?: string | null
          work_title: string
          work_type?: string | null
        }
        Update: {
          actual_cost?: number | null
          brand_id?: string | null
          created_at?: string | null
          creation_date?: string | null
          estimated_cost?: number | null
          id?: string
          notes?: string | null
          registration_date?: string | null
          registration_number?: string | null
          status?: string | null
          updated_at?: string | null
          work_title?: string
          work_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ip_copyrights_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brand_hierarchy"
            referencedColumns: ["id"]
          },
        ]
      }
      ip_domains: {
        Row: {
          annual_cost: number | null
          brand_id: string | null
          created_at: string | null
          domain_name: string
          expiration_date: string | null
          id: string
          is_primary: boolean | null
          redirect_to: string | null
          registrar: string | null
          registration_date: string | null
          status: string | null
        }
        Insert: {
          annual_cost?: number | null
          brand_id?: string | null
          created_at?: string | null
          domain_name: string
          expiration_date?: string | null
          id?: string
          is_primary?: boolean | null
          redirect_to?: string | null
          registrar?: string | null
          registration_date?: string | null
          status?: string | null
        }
        Update: {
          annual_cost?: number | null
          brand_id?: string | null
          created_at?: string | null
          domain_name?: string
          expiration_date?: string | null
          id?: string
          is_primary?: boolean | null
          redirect_to?: string | null
          registrar?: string | null
          registration_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ip_domains_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brand_hierarchy"
            referencedColumns: ["id"]
          },
        ]
      }
      ip_patents: {
        Row: {
          application_number: string | null
          claims_summary: string | null
          created_at: string | null
          estimated_cost: number | null
          filing_date: string | null
          grant_date: string | null
          id: string
          notes: string | null
          patent_number: string | null
          patent_title: string
          patent_type: string | null
          related_stage: number | null
          status: string | null
        }
        Insert: {
          application_number?: string | null
          claims_summary?: string | null
          created_at?: string | null
          estimated_cost?: number | null
          filing_date?: string | null
          grant_date?: string | null
          id?: string
          notes?: string | null
          patent_number?: string | null
          patent_title: string
          patent_type?: string | null
          related_stage?: number | null
          status?: string | null
        }
        Update: {
          application_number?: string | null
          claims_summary?: string | null
          created_at?: string | null
          estimated_cost?: number | null
          filing_date?: string | null
          grant_date?: string | null
          id?: string
          notes?: string | null
          patent_number?: string | null
          patent_title?: string
          patent_type?: string | null
          related_stage?: number | null
          status?: string | null
        }
        Relationships: []
      }
      ip_trade_secrets: {
        Row: {
          access_list: string[] | null
          category: string
          created_at: string | null
          description: string | null
          documentation_path: string | null
          id: string
          last_reviewed: string | null
          protection_measures: string[] | null
          related_stage: number | null
          secret_id: string
          secret_name: string
        }
        Insert: {
          access_list?: string[] | null
          category: string
          created_at?: string | null
          description?: string | null
          documentation_path?: string | null
          id?: string
          last_reviewed?: string | null
          protection_measures?: string[] | null
          related_stage?: number | null
          secret_id: string
          secret_name: string
        }
        Update: {
          access_list?: string[] | null
          category?: string
          created_at?: string | null
          description?: string | null
          documentation_path?: string | null
          id?: string
          last_reviewed?: string | null
          protection_measures?: string[] | null
          related_stage?: number | null
          secret_id?: string
          secret_name?: string
        }
        Relationships: []
      }
      ip_trademarks: {
        Row: {
          brand_id: string | null
          created_at: string | null
          estimated_cost: number | null
          filing_date: string | null
          id: string
          nice_classes: number[] | null
          notes: string | null
          priority_tier: number | null
          registration_date: string | null
          registration_number: string | null
          status: string | null
          trademark_name: string
          trademark_symbol: string | null
        }
        Insert: {
          brand_id?: string | null
          created_at?: string | null
          estimated_cost?: number | null
          filing_date?: string | null
          id?: string
          nice_classes?: number[] | null
          notes?: string | null
          priority_tier?: number | null
          registration_date?: string | null
          registration_number?: string | null
          status?: string | null
          trademark_name: string
          trademark_symbol?: string | null
        }
        Update: {
          brand_id?: string | null
          created_at?: string | null
          estimated_cost?: number | null
          filing_date?: string | null
          id?: string
          nice_classes?: number[] | null
          notes?: string | null
          priority_tier?: number | null
          registration_date?: string | null
          registration_number?: string | null
          status?: string | null
          trademark_name?: string
          trademark_symbol?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ip_trademarks_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brand_hierarchy"
            referencedColumns: ["id"]
          },
        ]
      }
      jurisdictions: {
        Row: {
          active: boolean | null
          co_no: number | null
          county: string
          county_name: string | null
          created_at: string | null
          data_completeness: number | null
          data_source: string | null
          gis_id: string | null
          id: number
          last_scraped: string | null
          last_updated: string | null
          municode_url: string | null
          name: string
          phase_1_complete: boolean | null
          phase_10_complete: boolean | null
          phase_11_complete: boolean | null
          phase_12_complete: boolean | null
          phase_13_complete: boolean | null
          phase_14_complete: boolean | null
          phase_15_complete: boolean | null
          phase_16_complete: boolean | null
          phase_17_complete: boolean | null
          phase_18_complete: boolean | null
          phase_19_complete: boolean | null
          phase_2_complete: boolean | null
          phase_20_complete: boolean | null
          phase_3_complete: boolean | null
          phase_4_complete: boolean | null
          phase_5_complete: boolean | null
          phase_6_complete: boolean | null
          phase_7_complete: boolean | null
          phase_8_complete: boolean | null
          phase_9_complete: boolean | null
          population: number | null
          skill_file_path: string | null
          skill_last_validated: string | null
          state: string
        }
        Insert: {
          active?: boolean | null
          co_no?: number | null
          county: string
          county_name?: string | null
          created_at?: string | null
          data_completeness?: number | null
          data_source?: string | null
          gis_id?: string | null
          id?: number
          last_scraped?: string | null
          last_updated?: string | null
          municode_url?: string | null
          name: string
          phase_1_complete?: boolean | null
          phase_10_complete?: boolean | null
          phase_11_complete?: boolean | null
          phase_12_complete?: boolean | null
          phase_13_complete?: boolean | null
          phase_14_complete?: boolean | null
          phase_15_complete?: boolean | null
          phase_16_complete?: boolean | null
          phase_17_complete?: boolean | null
          phase_18_complete?: boolean | null
          phase_19_complete?: boolean | null
          phase_2_complete?: boolean | null
          phase_20_complete?: boolean | null
          phase_3_complete?: boolean | null
          phase_4_complete?: boolean | null
          phase_5_complete?: boolean | null
          phase_6_complete?: boolean | null
          phase_7_complete?: boolean | null
          phase_8_complete?: boolean | null
          phase_9_complete?: boolean | null
          population?: number | null
          skill_file_path?: string | null
          skill_last_validated?: string | null
          state: string
        }
        Update: {
          active?: boolean | null
          co_no?: number | null
          county?: string
          county_name?: string | null
          created_at?: string | null
          data_completeness?: number | null
          data_source?: string | null
          gis_id?: string | null
          id?: number
          last_scraped?: string | null
          last_updated?: string | null
          municode_url?: string | null
          name?: string
          phase_1_complete?: boolean | null
          phase_10_complete?: boolean | null
          phase_11_complete?: boolean | null
          phase_12_complete?: boolean | null
          phase_13_complete?: boolean | null
          phase_14_complete?: boolean | null
          phase_15_complete?: boolean | null
          phase_16_complete?: boolean | null
          phase_17_complete?: boolean | null
          phase_18_complete?: boolean | null
          phase_19_complete?: boolean | null
          phase_2_complete?: boolean | null
          phase_20_complete?: boolean | null
          phase_3_complete?: boolean | null
          phase_4_complete?: boolean | null
          phase_5_complete?: boolean | null
          phase_6_complete?: boolean | null
          phase_7_complete?: boolean | null
          phase_8_complete?: boolean | null
          phase_9_complete?: boolean | null
          population?: number | null
          skill_file_path?: string | null
          skill_last_validated?: string | null
          state?: string
        }
        Relationships: []
      }
      kpi_definitions: {
        Row: {
          calculation_method: string | null
          category: string
          competitor_coverage: Json | null
          created_at: string | null
          data_source: string | null
          description: string | null
          id: number
          is_exclusive: boolean | null
          kpi_code: string
          kpi_name: string
          subcategory: string | null
          weight: number | null
        }
        Insert: {
          calculation_method?: string | null
          category: string
          competitor_coverage?: Json | null
          created_at?: string | null
          data_source?: string | null
          description?: string | null
          id?: number
          is_exclusive?: boolean | null
          kpi_code: string
          kpi_name: string
          subcategory?: string | null
          weight?: number | null
        }
        Update: {
          calculation_method?: string | null
          category?: string
          competitor_coverage?: Json | null
          created_at?: string | null
          data_source?: string | null
          description?: string | null
          id?: number
          is_exclusive?: boolean | null
          kpi_code?: string
          kpi_name?: string
          subcategory?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      langgraph_state: {
        Row: {
          awaiting_human: boolean | null
          completed_nodes: string[] | null
          completed_tasks: number | null
          created_at: string | null
          current_node: string | null
          current_state: Json
          failed_nodes: string[] | null
          human_checkpoints: string[] | null
          id: string
          last_transition_at: string | null
          pending_nodes: string[] | null
          total_tasks: number | null
          updated_at: string | null
          workflow_id: string
          workflow_name: string
        }
        Insert: {
          awaiting_human?: boolean | null
          completed_nodes?: string[] | null
          completed_tasks?: number | null
          created_at?: string | null
          current_node?: string | null
          current_state?: Json
          failed_nodes?: string[] | null
          human_checkpoints?: string[] | null
          id?: string
          last_transition_at?: string | null
          pending_nodes?: string[] | null
          total_tasks?: number | null
          updated_at?: string | null
          workflow_id: string
          workflow_name: string
        }
        Update: {
          awaiting_human?: boolean | null
          completed_nodes?: string[] | null
          completed_tasks?: number | null
          created_at?: string | null
          current_node?: string | null
          current_state?: Json
          failed_nodes?: string[] | null
          human_checkpoints?: string[] | null
          id?: string
          last_transition_at?: string | null
          pending_nodes?: string[] | null
          total_tasks?: number | null
          updated_at?: string | null
          workflow_id?: string
          workflow_name?: string
        }
        Relationships: []
      }
      langgraph_transitions: {
        Row: {
          created_at: string | null
          from_node: string | null
          id: string
          to_node: string
          transition_data: Json | null
          trigger: string
          workflow_id: string
        }
        Insert: {
          created_at?: string | null
          from_node?: string | null
          id?: string
          to_node: string
          transition_data?: Json | null
          trigger: string
          workflow_id: string
        }
        Update: {
          created_at?: string | null
          from_node?: string | null
          id?: string
          to_node?: string
          transition_data?: Json | null
          trigger?: string
          workflow_id?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          campaign: string | null
          created_at: string | null
          email: string | null
          id: string
          medium: string | null
          name: string | null
          source: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          campaign?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          medium?: string | null
          name?: string | null
          source?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          campaign?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          medium?: string | null
          name?: string | null
          source?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      learning_sessions: {
        Row: {
          activity_id: number | null
          application_notes: string | null
          category: string | null
          content_title: string | null
          content_url: string | null
          duration_minutes: number | null
          id: number
          key_takeaways: string | null
          platform: string | null
          shared_with_ai: boolean | null
          timestamp: string | null
          user_id: number | null
        }
        Insert: {
          activity_id?: number | null
          application_notes?: string | null
          category?: string | null
          content_title?: string | null
          content_url?: string | null
          duration_minutes?: number | null
          id?: number
          key_takeaways?: string | null
          platform?: string | null
          shared_with_ai?: boolean | null
          timestamp?: string | null
          user_id?: number | null
        }
        Update: {
          activity_id?: number | null
          application_notes?: string | null
          category?: string | null
          content_title?: string | null
          content_url?: string | null
          duration_minutes?: number | null
          id?: number
          key_takeaways?: string | null
          platform?: string | null
          shared_with_ai?: boolean | null
          timestamp?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      lien_results: {
        Row: {
          amount: number | null
          book_page: string | null
          case_number: string
          created_at: string | null
          creditor: string | null
          id: number
          lien_type: string | null
          parcel_id: string | null
          priority: number | null
          raw_data: Json | null
          recording_date: string | null
          source: string | null
          survives_foreclosure: boolean | null
        }
        Insert: {
          amount?: number | null
          book_page?: string | null
          case_number: string
          created_at?: string | null
          creditor?: string | null
          id?: number
          lien_type?: string | null
          parcel_id?: string | null
          priority?: number | null
          raw_data?: Json | null
          recording_date?: string | null
          source?: string | null
          survives_foreclosure?: boolean | null
        }
        Update: {
          amount?: number | null
          book_page?: string | null
          case_number?: string
          created_at?: string | null
          creditor?: string | null
          id?: number
          lien_type?: string | null
          parcel_id?: string | null
          priority?: number | null
          raw_data?: Json | null
          recording_date?: string | null
          source?: string | null
          survives_foreclosure?: boolean | null
        }
        Relationships: []
      }
      linkedin_queue: {
        Row: {
          content: string
          content_id: string
          created_at: string | null
          hashtags: Json | null
          id: string
          scheduled_time: string | null
          status: string | null
        }
        Insert: {
          content: string
          content_id: string
          created_at?: string | null
          hashtags?: Json | null
          id?: string
          scheduled_time?: string | null
          status?: string | null
        }
        Update: {
          content?: string
          content_id?: string
          created_at?: string | null
          hashtags?: Json | null
          id?: string
          scheduled_time?: string | null
          status?: string | null
        }
        Relationships: []
      }
      magi_calculations: {
        Row: {
          agi: number | null
          calculation_date: string | null
          created_at: string | null
          headroom: number | null
          id: string
          magi: number | null
          month: number | null
          notes: string | null
          on_track: boolean | null
          other_income: number | null
          program_threshold: number | null
          rental_expenses_total: number | null
          rental_gross_income: number | null
          rental_net_income: number | null
          target_program: string | null
          tax_year_id: string | null
        }
        Insert: {
          agi?: number | null
          calculation_date?: string | null
          created_at?: string | null
          headroom?: number | null
          id?: string
          magi?: number | null
          month?: number | null
          notes?: string | null
          on_track?: boolean | null
          other_income?: number | null
          program_threshold?: number | null
          rental_expenses_total?: number | null
          rental_gross_income?: number | null
          rental_net_income?: number | null
          target_program?: string | null
          tax_year_id?: string | null
        }
        Update: {
          agi?: number | null
          calculation_date?: string | null
          created_at?: string | null
          headroom?: number | null
          id?: string
          magi?: number | null
          month?: number | null
          notes?: string | null
          on_track?: boolean | null
          other_income?: number | null
          program_threshold?: number | null
          rental_expenses_total?: number | null
          rental_gross_income?: number | null
          rental_net_income?: number | null
          target_program?: string | null
          tax_year_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "magi_calculations_tax_year_id_fkey"
            columns: ["tax_year_id"]
            isOneToOne: false
            referencedRelation: "tax_years"
            referencedColumns: ["id"]
          },
        ]
      }
      master_index: {
        Row: {
          content_summary: string | null
          created_at: string | null
          id: number
          item_date: string | null
          item_description: string | null
          item_name: string
          item_type: string
          location_path: string
          location_type: string
          metadata: Json | null
          project: string | null
          review_notes: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          content_summary?: string | null
          created_at?: string | null
          id?: number
          item_date?: string | null
          item_description?: string | null
          item_name: string
          item_type: string
          location_path: string
          location_type: string
          metadata?: Json | null
          project?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          content_summary?: string | null
          created_at?: string | null
          id?: number
          item_date?: string | null
          item_description?: string | null
          item_name?: string
          item_type?: string
          location_path?: string
          location_type?: string
          metadata?: Json | null
          project?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      mcp_servers: {
        Row: {
          category: string | null
          created_at: string | null
          deployment_status: string | null
          description: string | null
          github_url: string | null
          id: number
          name: string
          priority: string | null
          use_case: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          deployment_status?: string | null
          description?: string | null
          github_url?: string | null
          id?: number
          name: string
          priority?: string | null
          use_case?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          deployment_status?: string | null
          description?: string | null
          github_url?: string | null
          id?: number
          name?: string
          priority?: string | null
          use_case?: string | null
        }
        Relationships: []
      }
      media_mentions: {
        Row: {
          brands_mentioned: string[] | null
          created_at: string | null
          id: string
          mention_date: string | null
          mention_type: string | null
          notes: string | null
          publication: string
          reach_estimate: number | null
          sentiment: string | null
          title: string | null
          url: string | null
        }
        Insert: {
          brands_mentioned?: string[] | null
          created_at?: string | null
          id?: string
          mention_date?: string | null
          mention_type?: string | null
          notes?: string | null
          publication: string
          reach_estimate?: number | null
          sentiment?: string | null
          title?: string | null
          url?: string | null
        }
        Update: {
          brands_mentioned?: string[] | null
          created_at?: string | null
          id?: string
          mention_date?: string | null
          mention_type?: string | null
          notes?: string | null
          publication?: string
          reach_estimate?: number | null
          sentiment?: string | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      methodology_versions: {
        Row: {
          changelog: string | null
          created_at: string | null
          description: string | null
          id: string
          is_current: boolean | null
          released_at: string | null
          stage_count: number | null
          version_name: string
          version_number: string
        }
        Insert: {
          changelog?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_current?: boolean | null
          released_at?: string | null
          stage_count?: number | null
          version_name: string
          version_number: string
        }
        Update: {
          changelog?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_current?: boolean | null
          released_at?: string | null
          stage_count?: number | null
          version_name?: string
          version_number?: string
        }
        Relationships: []
      }
      michael_nutrition: {
        Row: {
          calories: number | null
          carb_grams: number | null
          created_at: string | null
          date: string
          fat_grams: number | null
          id: number
          is_keto_compliant: boolean | null
          is_shabbat_exception: boolean | null
          meal_type: string | null
          notes: string | null
          protein_grams: number | null
        }
        Insert: {
          calories?: number | null
          carb_grams?: number | null
          created_at?: string | null
          date: string
          fat_grams?: number | null
          id?: number
          is_keto_compliant?: boolean | null
          is_shabbat_exception?: boolean | null
          meal_type?: string | null
          notes?: string | null
          protein_grams?: number | null
        }
        Update: {
          calories?: number | null
          carb_grams?: number | null
          created_at?: string | null
          date?: string
          fat_grams?: number | null
          id?: number
          is_keto_compliant?: boolean | null
          is_shabbat_exception?: boolean | null
          meal_type?: string | null
          notes?: string | null
          protein_grams?: number | null
        }
        Relationships: []
      }
      michael_recruiting: {
        Row: {
          academic_fit: number | null
          coach_email: string | null
          coach_name: string | null
          conference: string | null
          contact_status: string | null
          created_at: string | null
          division: string | null
          id: number
          interest_level: number | null
          last_contact_date: string | null
          next_followup_date: string | null
          notes: string | null
          school_name: string
          swim_fit: number | null
        }
        Insert: {
          academic_fit?: number | null
          coach_email?: string | null
          coach_name?: string | null
          conference?: string | null
          contact_status?: string | null
          created_at?: string | null
          division?: string | null
          id?: number
          interest_level?: number | null
          last_contact_date?: string | null
          next_followup_date?: string | null
          notes?: string | null
          school_name: string
          swim_fit?: number | null
        }
        Update: {
          academic_fit?: number | null
          coach_email?: string | null
          coach_name?: string | null
          conference?: string | null
          contact_status?: string | null
          created_at?: string | null
          division?: string | null
          id?: number
          interest_level?: number | null
          last_contact_date?: string | null
          next_followup_date?: string | null
          notes?: string | null
          school_name?: string
          swim_fit?: number | null
        }
        Relationships: []
      }
      michael_swim_times: {
        Row: {
          created_at: string | null
          d1_standard_seconds: number | null
          date: string
          event: string
          id: number
          is_pr: boolean | null
          meet_name: string | null
          notes: string | null
          percent_to_d1: number | null
          pool_type: string | null
          time_seconds: number
        }
        Insert: {
          created_at?: string | null
          d1_standard_seconds?: number | null
          date: string
          event: string
          id?: number
          is_pr?: boolean | null
          meet_name?: string | null
          notes?: string | null
          percent_to_d1?: number | null
          pool_type?: string | null
          time_seconds: number
        }
        Update: {
          created_at?: string | null
          d1_standard_seconds?: number | null
          date?: string
          event?: string
          id?: number
          is_pr?: boolean | null
          meet_name?: string | null
          notes?: string | null
          percent_to_d1?: number | null
          pool_type?: string | null
          time_seconds?: number
        }
        Relationships: []
      }
      monthly_retrospective: {
        Row: {
          action_items: string[] | null
          architectural_changes: string[] | null
          avg_deployment_success_rate: number | null
          avg_test_coverage_percent: number | null
          budget_variance: number | null
          claude_md_sections: number | null
          claude_md_total_lines: number | null
          county_expansion_considered: string[] | null
          created_at: string
          estimated_value_generated_usd: number | null
          id: string
          known_issues_count: number | null
          lessons_learned_count: number | null
          max_bid_formula_effectiveness: string | null
          ml_model_accuracy: number | null
          month_end_date: string
          month_start_date: string
          new_integrations_evaluated: string[] | null
          patterns_added: number | null
          patterns_archived: number | null
          repeated_mistakes_count: number | null
          reviewed_at: string | null
          reviewed_by: string | null
          roi_multiplier: number | null
          strategic_recommendations: string | null
          total_api_cost_usd: number | null
          total_auctions_analyzed: number | null
          what_needs_improvement: string | null
          what_worked_well: string | null
          win_loss_ratio_vs_predictions: number | null
        }
        Insert: {
          action_items?: string[] | null
          architectural_changes?: string[] | null
          avg_deployment_success_rate?: number | null
          avg_test_coverage_percent?: number | null
          budget_variance?: number | null
          claude_md_sections?: number | null
          claude_md_total_lines?: number | null
          county_expansion_considered?: string[] | null
          created_at?: string
          estimated_value_generated_usd?: number | null
          id?: string
          known_issues_count?: number | null
          lessons_learned_count?: number | null
          max_bid_formula_effectiveness?: string | null
          ml_model_accuracy?: number | null
          month_end_date: string
          month_start_date: string
          new_integrations_evaluated?: string[] | null
          patterns_added?: number | null
          patterns_archived?: number | null
          repeated_mistakes_count?: number | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          roi_multiplier?: number | null
          strategic_recommendations?: string | null
          total_api_cost_usd?: number | null
          total_auctions_analyzed?: number | null
          what_needs_improvement?: string | null
          what_worked_well?: string | null
          win_loss_ratio_vs_predictions?: number | null
        }
        Update: {
          action_items?: string[] | null
          architectural_changes?: string[] | null
          avg_deployment_success_rate?: number | null
          avg_test_coverage_percent?: number | null
          budget_variance?: number | null
          claude_md_sections?: number | null
          claude_md_total_lines?: number | null
          county_expansion_considered?: string[] | null
          created_at?: string
          estimated_value_generated_usd?: number | null
          id?: string
          known_issues_count?: number | null
          lessons_learned_count?: number | null
          max_bid_formula_effectiveness?: string | null
          ml_model_accuracy?: number | null
          month_end_date?: string
          month_start_date?: string
          new_integrations_evaluated?: string[] | null
          patterns_added?: number | null
          patterns_archived?: number | null
          repeated_mistakes_count?: number | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          roi_multiplier?: number | null
          strategic_recommendations?: string | null
          total_api_cost_usd?: number | null
          total_auctions_analyzed?: number | null
          what_needs_improvement?: string | null
          what_worked_well?: string | null
          win_loss_ratio_vs_predictions?: number | null
        }
        Relationships: []
      }
      multi_county_auctions: {
        Row: {
          acclaimweb_url: string | null
          assessed_value: number | null
          auction_date: string | null
          auction_time: string | null
          auction_url: string | null
          auction_venue: string | null
          baths: number | null
          bcpao_data: Json | null
          bcpao_enriched: boolean | null
          bcpao_url: string | null
          beds: number | null
          case_number: string | null
          cert_holder: string | null
          cert_number: string | null
          city: string | null
          clerk_url: string | null
          county: string
          created_at: string | null
          data_source: string | null
          id: string
          judgment_amount: number | null
          lot_size: number | null
          market_value: number | null
          opening_bid: number | null
          outstanding_certs_total: number | null
          parcel_id: string | null
          photo_url: string | null
          plaintiff: string | null
          po_avm_value: number | null
          po_bathrooms: number | null
          po_bedrooms: number | null
          po_last_sale_price: number | null
          po_market_value: number | null
          po_photo_url: string | null
          po_scraped_at: string | null
          po_sold_amount: number | null
          po_tax_amount: number | null
          po_winner_type: string | null
          property_address: string | null
          property_type: string | null
          realforeclose_url: string | null
          redemption_deadline: string | null
          sale_type: string
          scrape_timestamp: string | null
          sqft: number | null
          year_built: number | null
          zip: string | null
        }
        Insert: {
          acclaimweb_url?: string | null
          assessed_value?: number | null
          auction_date?: string | null
          auction_time?: string | null
          auction_url?: string | null
          auction_venue?: string | null
          baths?: number | null
          bcpao_data?: Json | null
          bcpao_enriched?: boolean | null
          bcpao_url?: string | null
          beds?: number | null
          case_number?: string | null
          cert_holder?: string | null
          cert_number?: string | null
          city?: string | null
          clerk_url?: string | null
          county: string
          created_at?: string | null
          data_source?: string | null
          id?: string
          judgment_amount?: number | null
          lot_size?: number | null
          market_value?: number | null
          opening_bid?: number | null
          outstanding_certs_total?: number | null
          parcel_id?: string | null
          photo_url?: string | null
          plaintiff?: string | null
          po_avm_value?: number | null
          po_bathrooms?: number | null
          po_bedrooms?: number | null
          po_last_sale_price?: number | null
          po_market_value?: number | null
          po_photo_url?: string | null
          po_scraped_at?: string | null
          po_sold_amount?: number | null
          po_tax_amount?: number | null
          po_winner_type?: string | null
          property_address?: string | null
          property_type?: string | null
          realforeclose_url?: string | null
          redemption_deadline?: string | null
          sale_type: string
          scrape_timestamp?: string | null
          sqft?: number | null
          year_built?: number | null
          zip?: string | null
        }
        Update: {
          acclaimweb_url?: string | null
          assessed_value?: number | null
          auction_date?: string | null
          auction_time?: string | null
          auction_url?: string | null
          auction_venue?: string | null
          baths?: number | null
          bcpao_data?: Json | null
          bcpao_enriched?: boolean | null
          bcpao_url?: string | null
          beds?: number | null
          case_number?: string | null
          cert_holder?: string | null
          cert_number?: string | null
          city?: string | null
          clerk_url?: string | null
          county?: string
          created_at?: string | null
          data_source?: string | null
          id?: string
          judgment_amount?: number | null
          lot_size?: number | null
          market_value?: number | null
          opening_bid?: number | null
          outstanding_certs_total?: number | null
          parcel_id?: string | null
          photo_url?: string | null
          plaintiff?: string | null
          po_avm_value?: number | null
          po_bathrooms?: number | null
          po_bedrooms?: number | null
          po_last_sale_price?: number | null
          po_market_value?: number | null
          po_photo_url?: string | null
          po_scraped_at?: string | null
          po_sold_amount?: number | null
          po_tax_amount?: number | null
          po_winner_type?: string | null
          property_address?: string | null
          property_type?: string | null
          realforeclose_url?: string | null
          redemption_deadline?: string | null
          sale_type?: string
          scrape_timestamp?: string | null
          sqft?: number | null
          year_built?: number | null
          zip?: string | null
        }
        Relationships: []
      }
      multi_county_auctions_legacy: {
        Row: {
          address_status: string | null
          assessed_value: number | null
          auction_date: string | null
          auction_type: string
          case_number: string
          centroid_lat: number | null
          centroid_lng: number | null
          county: string
          created_at: string | null
          dor_use_code: string | null
          enriched_at: string | null
          fl_co_no: number | null
          fl_parcel_id: number | null
          id: number
          is_condo: boolean | null
          is_vacant_land: boolean | null
          just_value: number | null
          land_value: number | null
          lot_sqft: number | null
          municipality: string | null
          opening_bid: number | null
          owner_name: string | null
          parcel_id: string | null
          photo_url: string | null
          plaintiff: string | null
          property_address: string | null
          scraped_at: string | null
          source_url: string | null
          total_living_area: number | null
          year_built: number | null
          zone_code: string | null
          zoning_category: string | null
        }
        Insert: {
          address_status?: string | null
          assessed_value?: number | null
          auction_date?: string | null
          auction_type: string
          case_number: string
          centroid_lat?: number | null
          centroid_lng?: number | null
          county: string
          created_at?: string | null
          dor_use_code?: string | null
          enriched_at?: string | null
          fl_co_no?: number | null
          fl_parcel_id?: number | null
          id?: number
          is_condo?: boolean | null
          is_vacant_land?: boolean | null
          just_value?: number | null
          land_value?: number | null
          lot_sqft?: number | null
          municipality?: string | null
          opening_bid?: number | null
          owner_name?: string | null
          parcel_id?: string | null
          photo_url?: string | null
          plaintiff?: string | null
          property_address?: string | null
          scraped_at?: string | null
          source_url?: string | null
          total_living_area?: number | null
          year_built?: number | null
          zone_code?: string | null
          zoning_category?: string | null
        }
        Update: {
          address_status?: string | null
          assessed_value?: number | null
          auction_date?: string | null
          auction_type?: string
          case_number?: string
          centroid_lat?: number | null
          centroid_lng?: number | null
          county?: string
          created_at?: string | null
          dor_use_code?: string | null
          enriched_at?: string | null
          fl_co_no?: number | null
          fl_parcel_id?: number | null
          id?: number
          is_condo?: boolean | null
          is_vacant_land?: boolean | null
          just_value?: number | null
          land_value?: number | null
          lot_sqft?: number | null
          municipality?: string | null
          opening_bid?: number | null
          owner_name?: string | null
          parcel_id?: string | null
          photo_url?: string | null
          plaintiff?: string | null
          property_address?: string | null
          scraped_at?: string | null
          source_url?: string | null
          total_living_area?: number | null
          year_built?: number | null
          zone_code?: string | null
          zoning_category?: string | null
        }
        Relationships: []
      }
      municipalities: {
        Row: {
          county: string | null
          created_at: string | null
          id: string
          last_scraped: string | null
          municode_url: string | null
          name: string
          scrape_status: string | null
          state: string
          updated_at: string | null
        }
        Insert: {
          county?: string | null
          created_at?: string | null
          id?: string
          last_scraped?: string | null
          municode_url?: string | null
          name: string
          scrape_status?: string | null
          state: string
          updated_at?: string | null
        }
        Update: {
          county?: string | null
          created_at?: string | null
          id?: string
          last_scraped?: string | null
          municode_url?: string | null
          name?: string
          scrape_status?: string | null
          state?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      municode_scrape_log: {
        Row: {
          amended_ordinances: number | null
          chapters_scraped: string[] | null
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: number
          jurisdiction_id: number
          municode_url: string
          new_ordinances: number | null
          ordinances_found: number | null
          scrape_status: string | null
          started_at: string | null
        }
        Insert: {
          amended_ordinances?: number | null
          chapters_scraped?: string[] | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: number
          jurisdiction_id: number
          municode_url: string
          new_ordinances?: number | null
          ordinances_found?: number | null
          scrape_status?: string | null
          started_at?: string | null
        }
        Update: {
          amended_ordinances?: number | null
          chapters_scraped?: string[] | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: number
          jurisdiction_id?: number
          municode_url?: string
          new_ordinances?: number | null
          ordinances_found?: number | null
          scrape_status?: string | null
          started_at?: string | null
        }
        Relationships: []
      }
      optimization_insights: {
        Row: {
          applied: boolean | null
          auction_date: string
          generated_at: string | null
          id: string
          insights: Json
          top_performers: Json
        }
        Insert: {
          applied?: boolean | null
          auction_date: string
          generated_at?: string | null
          id?: string
          insights: Json
          top_performers: Json
        }
        Update: {
          applied?: boolean | null
          auction_date?: string
          generated_at?: string | null
          id?: string
          insights?: Json
          top_performers?: Json
        }
        Relationships: []
      }
      orchestrated_tasks: {
        Row: {
          assigned_at: string | null
          assigned_to: string | null
          blocks: string[] | null
          completed_at: string | null
          created_at: string | null
          depends_on: string[] | null
          error_message: string | null
          execution_log: Json | null
          feedback_sent: boolean | null
          id: string
          langgraph_node: string
          max_retries: number | null
          pr_number: number | null
          pr_url: string | null
          priority: string | null
          repository: string
          retry_count: number | null
          started_at: string | null
          status: string | null
          task_id: string
          task_type: string | null
          tsf: Json
        }
        Insert: {
          assigned_at?: string | null
          assigned_to?: string | null
          blocks?: string[] | null
          completed_at?: string | null
          created_at?: string | null
          depends_on?: string[] | null
          error_message?: string | null
          execution_log?: Json | null
          feedback_sent?: boolean | null
          id?: string
          langgraph_node: string
          max_retries?: number | null
          pr_number?: number | null
          pr_url?: string | null
          priority?: string | null
          repository: string
          retry_count?: number | null
          started_at?: string | null
          status?: string | null
          task_id: string
          task_type?: string | null
          tsf?: Json
        }
        Update: {
          assigned_at?: string | null
          assigned_to?: string | null
          blocks?: string[] | null
          completed_at?: string | null
          created_at?: string | null
          depends_on?: string[] | null
          error_message?: string | null
          execution_log?: Json | null
          feedback_sent?: boolean | null
          id?: string
          langgraph_node?: string
          max_retries?: number | null
          pr_number?: number | null
          pr_url?: string | null
          priority?: string | null
          repository?: string
          retry_count?: number | null
          started_at?: string | null
          status?: string | null
          task_id?: string
          task_type?: string | null
          tsf?: Json
        }
        Relationships: []
      }
      ordinance_changes: {
        Row: {
          affected_districts: string[] | null
          affected_sections: string[] | null
          change_date: string
          change_summary: string
          change_type: string
          created_at: string | null
          id: number
          impact_level: string | null
          jurisdiction_id: number
          new_ordinance_id: number | null
          old_ordinance_id: number | null
        }
        Insert: {
          affected_districts?: string[] | null
          affected_sections?: string[] | null
          change_date: string
          change_summary: string
          change_type: string
          created_at?: string | null
          id?: number
          impact_level?: string | null
          jurisdiction_id: number
          new_ordinance_id?: number | null
          old_ordinance_id?: number | null
        }
        Update: {
          affected_districts?: string[] | null
          affected_sections?: string[] | null
          change_date?: string
          change_summary?: string
          change_type?: string
          created_at?: string | null
          id?: number
          impact_level?: string | null
          jurisdiction_id?: number
          new_ordinance_id?: number | null
          old_ordinance_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ordinance_changes_new_ordinance_id_fkey"
            columns: ["new_ordinance_id"]
            isOneToOne: false
            referencedRelation: "ordinances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ordinance_changes_old_ordinance_id_fkey"
            columns: ["old_ordinance_id"]
            isOneToOne: false
            referencedRelation: "ordinances"
            referencedColumns: ["id"]
          },
        ]
      }
      ordinance_sections: {
        Row: {
          content_sample: string | null
          created_at: string | null
          full_content: string | null
          id: string
          municipality_id: string | null
          municode_url: string | null
          node_id: string | null
          parent_section_id: string | null
          section_type: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content_sample?: string | null
          created_at?: string | null
          full_content?: string | null
          id?: string
          municipality_id?: string | null
          municode_url?: string | null
          node_id?: string | null
          parent_section_id?: string | null
          section_type: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content_sample?: string | null
          created_at?: string | null
          full_content?: string | null
          id?: string
          municipality_id?: string | null
          municode_url?: string | null
          node_id?: string | null
          parent_section_id?: string | null
          section_type?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ordinance_sections_municipality_id_fkey"
            columns: ["municipality_id"]
            isOneToOne: false
            referencedRelation: "municipalities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ordinance_sections_parent_section_id_fkey"
            columns: ["parent_section_id"]
            isOneToOne: false
            referencedRelation: "ordinance_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      ordinance_zoning_districts: {
        Row: {
          code: string
          conditional_uses: string[] | null
          created_at: string | null
          description: string | null
          flum_designation: string | null
          id: string
          max_density: string | null
          min_lot_size: string | null
          municipality_id: string | null
          name: string | null
          permitted_uses: string[] | null
          setbacks: Json | null
          source_section: string | null
          updated_at: string | null
        }
        Insert: {
          code: string
          conditional_uses?: string[] | null
          created_at?: string | null
          description?: string | null
          flum_designation?: string | null
          id?: string
          max_density?: string | null
          min_lot_size?: string | null
          municipality_id?: string | null
          name?: string | null
          permitted_uses?: string[] | null
          setbacks?: Json | null
          source_section?: string | null
          updated_at?: string | null
        }
        Update: {
          code?: string
          conditional_uses?: string[] | null
          created_at?: string | null
          description?: string | null
          flum_designation?: string | null
          id?: string
          max_density?: string | null
          min_lot_size?: string | null
          municipality_id?: string | null
          name?: string | null
          permitted_uses?: string[] | null
          setbacks?: Json | null
          source_section?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ordinance_zoning_districts_municipality_id_fkey"
            columns: ["municipality_id"]
            isOneToOne: false
            referencedRelation: "municipalities"
            referencedColumns: ["id"]
          },
        ]
      }
      ordinances: {
        Row: {
          chapter: string | null
          content_hash: string | null
          created_at: string | null
          effective_date: string | null
          full_text: string | null
          id: number
          jurisdiction_id: number
          ordinance_number: string
          passed_date: string | null
          section: string | null
          source_url: string | null
          status: string | null
          summary: string | null
          title: string
        }
        Insert: {
          chapter?: string | null
          content_hash?: string | null
          created_at?: string | null
          effective_date?: string | null
          full_text?: string | null
          id?: number
          jurisdiction_id: number
          ordinance_number: string
          passed_date?: string | null
          section?: string | null
          source_url?: string | null
          status?: string | null
          summary?: string | null
          title: string
        }
        Update: {
          chapter?: string | null
          content_hash?: string | null
          created_at?: string | null
          effective_date?: string | null
          full_text?: string | null
          id?: number
          jurisdiction_id?: number
          ordinance_number?: string
          passed_date?: string | null
          section?: string | null
          source_url?: string | null
          status?: string | null
          summary?: string | null
          title?: string
        }
        Relationships: []
      }
      overlay_districts: {
        Row: {
          additional_restrictions: string | null
          additional_setbacks: Json | null
          available_bonuses: string[] | null
          boundary_description: string | null
          created_at: string | null
          design_standards: string | null
          id: number
          jurisdiction_id: number
          ordinance_id: number | null
          overlay_code: string
          overlay_name: string
          overlay_type: string
          source_url: string | null
        }
        Insert: {
          additional_restrictions?: string | null
          additional_setbacks?: Json | null
          available_bonuses?: string[] | null
          boundary_description?: string | null
          created_at?: string | null
          design_standards?: string | null
          id?: number
          jurisdiction_id: number
          ordinance_id?: number | null
          overlay_code: string
          overlay_name: string
          overlay_type: string
          source_url?: string | null
        }
        Update: {
          additional_restrictions?: string | null
          additional_setbacks?: Json | null
          available_bonuses?: string[] | null
          boundary_description?: string | null
          created_at?: string | null
          design_standards?: string | null
          id?: number
          jurisdiction_id?: number
          ordinance_id?: number | null
          overlay_code?: string
          overlay_name?: string
          overlay_type?: string
          source_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "overlay_districts_ordinance_id_fkey"
            columns: ["ordinance_id"]
            isOneToOne: false
            referencedRelation: "ordinances"
            referencedColumns: ["id"]
          },
        ]
      }
      p360_checklists: {
        Row: {
          ai_confidence: number | null
          ai_extracted_value: string | null
          checked: boolean
          checked_at: string | null
          created_at: string
          id: string
          item_id: string
          notes: string | null
          phase_id: number
          property_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_confidence?: number | null
          ai_extracted_value?: string | null
          checked?: boolean
          checked_at?: string | null
          created_at?: string
          id?: string
          item_id: string
          notes?: string | null
          phase_id: number
          property_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_confidence?: number | null
          ai_extracted_value?: string | null
          checked?: boolean
          checked_at?: string | null
          created_at?: string
          id?: string
          item_id?: string
          notes?: string | null
          phase_id?: number
          property_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "p360_checklists_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "p360_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      p360_documents: {
        Row: {
          analysis: Json | null
          applied: boolean | null
          completed_items: Json | null
          created_at: string
          doc_type: string | null
          error_message: string | null
          file_size: number | null
          file_type: string
          filename: string
          id: string
          key_findings: Json | null
          property_id: string | null
          status: string
          storage_path: string | null
          summary: string | null
          updated_at: string
          user_id: string
          warnings: Json | null
        }
        Insert: {
          analysis?: Json | null
          applied?: boolean | null
          completed_items?: Json | null
          created_at?: string
          doc_type?: string | null
          error_message?: string | null
          file_size?: number | null
          file_type: string
          filename: string
          id?: string
          key_findings?: Json | null
          property_id?: string | null
          status?: string
          storage_path?: string | null
          summary?: string | null
          updated_at?: string
          user_id: string
          warnings?: Json | null
        }
        Update: {
          analysis?: Json | null
          applied?: boolean | null
          completed_items?: Json | null
          created_at?: string
          doc_type?: string | null
          error_message?: string | null
          file_size?: number | null
          file_type?: string
          filename?: string
          id?: string
          key_findings?: Json | null
          property_id?: string | null
          status?: string
          storage_path?: string | null
          summary?: string | null
          updated_at?: string
          user_id?: string
          warnings?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "p360_documents_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "p360_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      p360_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          role: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      p360_properties: {
        Row: {
          address: string
          baths: number | null
          beds: number | null
          city: string | null
          created_at: string
          estimated_value: number | null
          id: string
          lot_size_sqft: number | null
          metadata: Json | null
          monthly_rent: number | null
          mortgage_payoff: number | null
          notes: string | null
          occupancy_status: string | null
          parcel_id: string | null
          property_type: string | null
          sqft: number | null
          state: string | null
          updated_at: string
          user_id: string
          year_built: number | null
          zip: string | null
        }
        Insert: {
          address: string
          baths?: number | null
          beds?: number | null
          city?: string | null
          created_at?: string
          estimated_value?: number | null
          id?: string
          lot_size_sqft?: number | null
          metadata?: Json | null
          monthly_rent?: number | null
          mortgage_payoff?: number | null
          notes?: string | null
          occupancy_status?: string | null
          parcel_id?: string | null
          property_type?: string | null
          sqft?: number | null
          state?: string | null
          updated_at?: string
          user_id: string
          year_built?: number | null
          zip?: string | null
        }
        Update: {
          address?: string
          baths?: number | null
          beds?: number | null
          city?: string | null
          created_at?: string
          estimated_value?: number | null
          id?: string
          lot_size_sqft?: number | null
          metadata?: Json | null
          monthly_rent?: number | null
          mortgage_payoff?: number | null
          notes?: string | null
          occupancy_status?: string | null
          parcel_id?: string | null
          property_type?: string | null
          sqft?: number | null
          state?: string | null
          updated_at?: string
          user_id?: string
          year_built?: number | null
          zip?: string | null
        }
        Relationships: []
      }
      p360_sessions: {
        Row: {
          actions: Json | null
          created_at: string
          ended_at: string | null
          id: string
          progress_snapshot: Json | null
          property_id: string | null
          started_at: string
          user_id: string
        }
        Insert: {
          actions?: Json | null
          created_at?: string
          ended_at?: string | null
          id?: string
          progress_snapshot?: Json | null
          property_id?: string | null
          started_at?: string
          user_id: string
        }
        Update: {
          actions?: Json | null
          created_at?: string
          ended_at?: string | null
          id?: string
          progress_snapshot?: Json | null
          property_id?: string | null
          started_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "p360_sessions_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "p360_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      parcel_cache: {
        Row: {
          acres: number | null
          bldg_value: number | null
          city: string | null
          exemption_code: string | null
          full_address: string | null
          land_value: number | null
          legal_desc: string | null
          liv_area: number | null
          millage_code: string | null
          object_id: number
          owner_city: string | null
          owner_name1: string | null
          owner_name2: string | null
          owner_state: string | null
          owner_street: string | null
          owner_zip: string | null
          parcel_id: string | null
          property_id: number | null
          range: string | null
          scraped_at: string
          section: string | null
          state: string | null
          street_dir: string | null
          street_name: string | null
          street_number: string | null
          street_type: string | null
          subdivision: string | null
          tax_acct: number | null
          township: string | null
          use_code: string | null
          use_code_desc: string | null
          zip_code: string | null
        }
        Insert: {
          acres?: number | null
          bldg_value?: number | null
          city?: string | null
          exemption_code?: string | null
          full_address?: string | null
          land_value?: number | null
          legal_desc?: string | null
          liv_area?: number | null
          millage_code?: string | null
          object_id: number
          owner_city?: string | null
          owner_name1?: string | null
          owner_name2?: string | null
          owner_state?: string | null
          owner_street?: string | null
          owner_zip?: string | null
          parcel_id?: string | null
          property_id?: number | null
          range?: string | null
          scraped_at?: string
          section?: string | null
          state?: string | null
          street_dir?: string | null
          street_name?: string | null
          street_number?: string | null
          street_type?: string | null
          subdivision?: string | null
          tax_acct?: number | null
          township?: string | null
          use_code?: string | null
          use_code_desc?: string | null
          zip_code?: string | null
        }
        Update: {
          acres?: number | null
          bldg_value?: number | null
          city?: string | null
          exemption_code?: string | null
          full_address?: string | null
          land_value?: number | null
          legal_desc?: string | null
          liv_area?: number | null
          millage_code?: string | null
          object_id?: number
          owner_city?: string | null
          owner_name1?: string | null
          owner_name2?: string | null
          owner_state?: string | null
          owner_street?: string | null
          owner_zip?: string | null
          parcel_id?: string | null
          property_id?: number | null
          range?: string | null
          scraped_at?: string
          section?: string | null
          state?: string | null
          street_dir?: string | null
          street_name?: string | null
          street_number?: string | null
          street_type?: string | null
          subdivision?: string | null
          tax_acct?: number | null
          township?: string | null
          use_code?: string | null
          use_code_desc?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      parcel_zones: {
        Row: {
          created_at: string | null
          effective_date: string | null
          future_land_use: string | null
          id: number
          jurisdiction_id: number | null
          overlay_codes: string[] | null
          parcel_id: string
          source: string | null
          tax_account: string | null
          zone_code: string
          zone_name: string | null
        }
        Insert: {
          created_at?: string | null
          effective_date?: string | null
          future_land_use?: string | null
          id?: number
          jurisdiction_id?: number | null
          overlay_codes?: string[] | null
          parcel_id: string
          source?: string | null
          tax_account?: string | null
          zone_code: string
          zone_name?: string | null
        }
        Update: {
          created_at?: string | null
          effective_date?: string | null
          future_land_use?: string | null
          id?: number
          jurisdiction_id?: number | null
          overlay_codes?: string[] | null
          parcel_id?: string
          source?: string | null
          tax_account?: string | null
          zone_code?: string
          zone_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parcel_zones_jurisdiction_id_fkey"
            columns: ["jurisdiction_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
        ]
      }
      permitted_uses: {
        Row: {
          confidence_score: number | null
          effective_date: string | null
          id: number
          is_adu: boolean | null
          is_commercial: boolean | null
          is_home_occupation: boolean | null
          is_industrial: boolean | null
          is_mixed_use: boolean | null
          is_multi_family: boolean | null
          is_short_term_rental: boolean | null
          is_single_family: boolean | null
          max_square_footage: number | null
          ordinance_section: string | null
          requires_public_hearing: boolean | null
          requires_site_plan_review: boolean | null
          requires_special_permit: boolean | null
          scraped_at: string | null
          special_conditions: string | null
          use_category: string | null
          use_description: string
          use_subcategory: string | null
          use_type: string
          zoning_district_id: number | null
        }
        Insert: {
          confidence_score?: number | null
          effective_date?: string | null
          id?: number
          is_adu?: boolean | null
          is_commercial?: boolean | null
          is_home_occupation?: boolean | null
          is_industrial?: boolean | null
          is_mixed_use?: boolean | null
          is_multi_family?: boolean | null
          is_short_term_rental?: boolean | null
          is_single_family?: boolean | null
          max_square_footage?: number | null
          ordinance_section?: string | null
          requires_public_hearing?: boolean | null
          requires_site_plan_review?: boolean | null
          requires_special_permit?: boolean | null
          scraped_at?: string | null
          special_conditions?: string | null
          use_category?: string | null
          use_description: string
          use_subcategory?: string | null
          use_type: string
          zoning_district_id?: number | null
        }
        Update: {
          confidence_score?: number | null
          effective_date?: string | null
          id?: number
          is_adu?: boolean | null
          is_commercial?: boolean | null
          is_home_occupation?: boolean | null
          is_industrial?: boolean | null
          is_mixed_use?: boolean | null
          is_multi_family?: boolean | null
          is_short_term_rental?: boolean | null
          is_single_family?: boolean | null
          max_square_footage?: number | null
          ordinance_section?: string | null
          requires_public_hearing?: boolean | null
          requires_site_plan_review?: boolean | null
          requires_special_permit?: boolean | null
          scraped_at?: string | null
          special_conditions?: string | null
          use_category?: string | null
          use_description?: string
          use_subcategory?: string | null
          use_type?: string
          zoning_district_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "permitted_uses_zoning_district_id_fkey"
            columns: ["zoning_district_id"]
            isOneToOne: false
            referencedRelation: "zoning_districts"
            referencedColumns: ["id"]
          },
        ]
      }
      pipeline_runs: {
        Row: {
          auction_date: string
          bid_count: number | null
          completed_at: string | null
          created_at: string | null
          id: number
          mode: string | null
          results: Json | null
          review_count: number | null
          run_id: string
          skip_count: number | null
          source: string | null
          started_at: string | null
          status: string | null
          total_properties: number | null
        }
        Insert: {
          auction_date: string
          bid_count?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: number
          mode?: string | null
          results?: Json | null
          review_count?: number | null
          run_id: string
          skip_count?: number | null
          source?: string | null
          started_at?: string | null
          status?: string | null
          total_properties?: number | null
        }
        Update: {
          auction_date?: string
          bid_count?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: number
          mode?: string | null
          results?: Json | null
          review_count?: number | null
          run_id?: string
          skip_count?: number | null
          source?: string | null
          started_at?: string | null
          status?: string | null
          total_properties?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          stripe_customer_id: string | null
          subscription_tier: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          stripe_customer_id?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          stripe_customer_id?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      property_analyses: {
        Row: {
          address: string
          analysis_date: string | null
          analysis_json: Json | null
          confidence_level: number | null
          created_at: string | null
          id: string
          jurisdiction_id: number | null
          max_bid: number | null
          parcel_id: string
          recommendation: string | null
          zonewise_score: number | null
        }
        Insert: {
          address: string
          analysis_date?: string | null
          analysis_json?: Json | null
          confidence_level?: number | null
          created_at?: string | null
          id?: string
          jurisdiction_id?: number | null
          max_bid?: number | null
          parcel_id: string
          recommendation?: string | null
          zonewise_score?: number | null
        }
        Update: {
          address?: string
          analysis_date?: string | null
          analysis_json?: Json | null
          confidence_level?: number | null
          created_at?: string | null
          id?: string
          jurisdiction_id?: number | null
          max_bid?: number | null
          parcel_id?: string
          recommendation?: string | null
          zonewise_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "property_analyses_jurisdiction_id_fkey"
            columns: ["jurisdiction_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
        ]
      }
      property_kpi_scores: {
        Row: {
          analysis_id: string | null
          confidence: string | null
          created_at: string | null
          data_source: string | null
          id: string
          kpi_id: number | null
          normalized_score: number | null
          notes: string | null
          raw_value: string | null
          weight_applied: number | null
          weighted_score: number | null
        }
        Insert: {
          analysis_id?: string | null
          confidence?: string | null
          created_at?: string | null
          data_source?: string | null
          id?: string
          kpi_id?: number | null
          normalized_score?: number | null
          notes?: string | null
          raw_value?: string | null
          weight_applied?: number | null
          weighted_score?: number | null
        }
        Update: {
          analysis_id?: string | null
          confidence?: string | null
          created_at?: string | null
          data_source?: string | null
          id?: string
          kpi_id?: number | null
          normalized_score?: number | null
          notes?: string | null
          raw_value?: string | null
          weight_applied?: number | null
          weighted_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "property_kpi_scores_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "property_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_kpi_scores_kpi_id_fkey"
            columns: ["kpi_id"]
            isOneToOne: false
            referencedRelation: "kpi_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      quality_metrics: {
        Row: {
          actual_minutes: number | null
          caught_by: string | null
          component: string | null
          description: string
          estimated_minutes: number | null
          git_commit_sha: string | null
          id: string
          metric_type: string
          related_issue_number: number | null
          resolution_notes: string | null
          resolved: boolean | null
          resolved_at: string | null
          severity: string | null
          tags: string[] | null
          task_complexity: number | null
          timestamp: string
          validation_checklist_used: string | null
        }
        Insert: {
          actual_minutes?: number | null
          caught_by?: string | null
          component?: string | null
          description: string
          estimated_minutes?: number | null
          git_commit_sha?: string | null
          id?: string
          metric_type: string
          related_issue_number?: number | null
          resolution_notes?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          severity?: string | null
          tags?: string[] | null
          task_complexity?: number | null
          timestamp?: string
          validation_checklist_used?: string | null
        }
        Update: {
          actual_minutes?: number | null
          caught_by?: string | null
          component?: string | null
          description?: string
          estimated_minutes?: number | null
          git_commit_sha?: string | null
          id?: string
          metric_type?: string
          related_issue_number?: number | null
          resolution_notes?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          severity?: string | null
          tags?: string[] | null
          task_complexity?: number | null
          timestamp?: string
          validation_checklist_used?: string | null
        }
        Relationships: []
      }
      rate_limit_state: {
        Row: {
          day_count: number | null
          domain: string
          hour_count: number | null
          id: number
          last_reset_day: string | null
          last_reset_hour: string | null
          last_reset_minute: string | null
          minute_count: number | null
          updated_at: string | null
        }
        Insert: {
          day_count?: number | null
          domain: string
          hour_count?: number | null
          id?: number
          last_reset_day?: string | null
          last_reset_hour?: string | null
          last_reset_minute?: string | null
          minute_count?: number | null
          updated_at?: string | null
        }
        Update: {
          day_count?: number | null
          domain?: string
          hour_count?: number | null
          id?: number
          last_reset_day?: string | null
          last_reset_hour?: string | null
          last_reset_minute?: string | null
          minute_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      referral_events: {
        Row: {
          actor_id: string | null
          created_at: string | null
          event_type: string
          id: string
          ip_address: unknown
          metadata: Json | null
          pass_id: string | null
          user_agent: string | null
        }
        Insert: {
          actor_id?: string | null
          created_at?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          pass_id?: string | null
          user_agent?: string | null
        }
        Update: {
          actor_id?: string | null
          created_at?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          pass_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_events_pass_id_fkey"
            columns: ["pass_id"]
            isOneToOne: false
            referencedRelation: "scout_passes"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_leaderboard: {
        Row: {
          created_at: string | null
          days_earned: number | null
          id: string
          passes_claimed: number | null
          passes_converted: number | null
          passes_generated: number | null
          passes_shared: number | null
          quarter: string
          rank: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          days_earned?: number | null
          id?: string
          passes_claimed?: number | null
          passes_converted?: number | null
          passes_generated?: number | null
          passes_shared?: number | null
          quarter: string
          rank?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          days_earned?: number | null
          id?: string
          passes_claimed?: number | null
          passes_converted?: number | null
          passes_generated?: number | null
          passes_shared?: number | null
          quarter?: string
          rank?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      referral_rewards: {
        Row: {
          applied_at: string | null
          created_at: string | null
          id: string
          pass_id: string
          reward_type: string
          reward_value: Json
          status: string
          user_id: string
        }
        Insert: {
          applied_at?: string | null
          created_at?: string | null
          id?: string
          pass_id: string
          reward_type: string
          reward_value: Json
          status?: string
          user_id: string
        }
        Update: {
          applied_at?: string | null
          created_at?: string | null
          id?: string
          pass_id?: string
          reward_type?: string
          reward_value?: Json
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referral_rewards_pass_id_fkey"
            columns: ["pass_id"]
            isOneToOne: false
            referencedRelation: "scout_passes"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_expenses: {
        Row: {
          amount: number
          category: string
          created_at: string | null
          deductible: boolean | null
          description: string | null
          expense_date: string | null
          id: string
          month: number | null
          property_id: string | null
          receipt_url: string | null
          schedule_e_line: string | null
          subcategory: string | null
          vendor: string | null
          year: number
        }
        Insert: {
          amount: number
          category: string
          created_at?: string | null
          deductible?: boolean | null
          description?: string | null
          expense_date?: string | null
          id?: string
          month?: number | null
          property_id?: string | null
          receipt_url?: string | null
          schedule_e_line?: string | null
          subcategory?: string | null
          vendor?: string | null
          year: number
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string | null
          deductible?: boolean | null
          description?: string | null
          expense_date?: string | null
          id?: string
          month?: number | null
          property_id?: string | null
          receipt_url?: string | null
          schedule_e_line?: string | null
          subcategory?: string | null
          vendor?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "rental_expenses_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "rental_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_income: {
        Row: {
          collected: boolean | null
          created_at: string | null
          gross_rent: number | null
          id: string
          month: number
          notes: string | null
          other_income: number | null
          property_id: string | null
          vacancy_days: number | null
          vacancy_loss: number | null
          year: number
        }
        Insert: {
          collected?: boolean | null
          created_at?: string | null
          gross_rent?: number | null
          id?: string
          month: number
          notes?: string | null
          other_income?: number | null
          property_id?: string | null
          vacancy_days?: number | null
          vacancy_loss?: number | null
          year: number
        }
        Update: {
          collected?: boolean | null
          created_at?: string | null
          gross_rent?: number | null
          id?: string
          month?: number
          notes?: string | null
          other_income?: number | null
          property_id?: string | null
          vacancy_days?: number | null
          vacancy_loss?: number | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "rental_income_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "rental_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      rental_properties: {
        Row: {
          address: string
          annual_depreciation: number | null
          city: string | null
          created_at: string | null
          current_market_value: number | null
          depreciation_basis: number | null
          id: string
          is_primary_residence: boolean | null
          mortgage_balance: number | null
          property_type: string | null
          purchase_date: string | null
          purchase_price: number | null
          state: string | null
          tax_year_id: string | null
          zip: string | null
        }
        Insert: {
          address: string
          annual_depreciation?: number | null
          city?: string | null
          created_at?: string | null
          current_market_value?: number | null
          depreciation_basis?: number | null
          id?: string
          is_primary_residence?: boolean | null
          mortgage_balance?: number | null
          property_type?: string | null
          purchase_date?: string | null
          purchase_price?: number | null
          state?: string | null
          tax_year_id?: string | null
          zip?: string | null
        }
        Update: {
          address?: string
          annual_depreciation?: number | null
          city?: string | null
          created_at?: string | null
          current_market_value?: number | null
          depreciation_basis?: number | null
          id?: string
          is_primary_residence?: boolean | null
          mortgage_balance?: number | null
          property_type?: string | null
          purchase_date?: string | null
          purchase_price?: number | null
          state?: string | null
          tax_year_id?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rental_properties_tax_year_id_fkey"
            columns: ["tax_year_id"]
            isOneToOne: false
            referencedRelation: "tax_years"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_history: {
        Row: {
          book: string | null
          created_at: string | null
          deed_code: string | null
          deed_description: string | null
          id: number
          instrument_number: string | null
          page: string | null
          qualified: boolean | null
          sale_date: string
          sale_price: number | null
          sale_qual_code: string | null
          sale_qual_desc: string | null
          tax_account: string
          vacant_or_improved: boolean | null
        }
        Insert: {
          book?: string | null
          created_at?: string | null
          deed_code?: string | null
          deed_description?: string | null
          id?: number
          instrument_number?: string | null
          page?: string | null
          qualified?: boolean | null
          sale_date: string
          sale_price?: number | null
          sale_qual_code?: string | null
          sale_qual_desc?: string | null
          tax_account: string
          vacant_or_improved?: boolean | null
        }
        Update: {
          book?: string | null
          created_at?: string | null
          deed_code?: string | null
          deed_description?: string | null
          id?: number
          instrument_number?: string | null
          page?: string | null
          qualified?: boolean | null
          sale_date?: string
          sale_price?: number | null
          sale_qual_code?: string | null
          sale_qual_desc?: string | null
          tax_account?: string
          vacant_or_improved?: boolean | null
        }
        Relationships: []
      }
      sample_properties: {
        Row: {
          acres: number | null
          address: string | null
          assessed_value: number | null
          bcpao_updated_at: string | null
          building_value: number | null
          census_tract: string | null
          centroid_lat: number | null
          centroid_lon: number | null
          city: string | null
          created_at: string | null
          crime_score: number | null
          demographics_updated_at: string | null
          exemptions: string | null
          geometry: Json | null
          geometry_wkt: string | null
          id: number
          jurisdiction_id: number
          land_value: number | null
          last_sale_date: string | null
          last_sale_price: number | null
          legal_description: string | null
          market_value: number | null
          median_home_value: number | null
          median_household_income: number | null
          median_rent: number | null
          owner_mailing_address: string | null
          owner_name: string | null
          parcel_id: string
          photo_url: string | null
          plat_book_page: string | null
          poverty_rate: number | null
          school_score: number | null
          site_code: string | null
          state: string | null
          subdivision: string | null
          tax_account: string | null
          taxable_value: number | null
          taxing_district: string | null
          total_buildings: number | null
          total_population: number | null
          use_code: string | null
          use_description: string | null
          vacancy_rate: number | null
          walk_score: number | null
          zip_code: string | null
          zone_code: string | null
        }
        Insert: {
          acres?: number | null
          address?: string | null
          assessed_value?: number | null
          bcpao_updated_at?: string | null
          building_value?: number | null
          census_tract?: string | null
          centroid_lat?: number | null
          centroid_lon?: number | null
          city?: string | null
          created_at?: string | null
          crime_score?: number | null
          demographics_updated_at?: string | null
          exemptions?: string | null
          geometry?: Json | null
          geometry_wkt?: string | null
          id?: number
          jurisdiction_id: number
          land_value?: number | null
          last_sale_date?: string | null
          last_sale_price?: number | null
          legal_description?: string | null
          market_value?: number | null
          median_home_value?: number | null
          median_household_income?: number | null
          median_rent?: number | null
          owner_mailing_address?: string | null
          owner_name?: string | null
          parcel_id: string
          photo_url?: string | null
          plat_book_page?: string | null
          poverty_rate?: number | null
          school_score?: number | null
          site_code?: string | null
          state?: string | null
          subdivision?: string | null
          tax_account?: string | null
          taxable_value?: number | null
          taxing_district?: string | null
          total_buildings?: number | null
          total_population?: number | null
          use_code?: string | null
          use_description?: string | null
          vacancy_rate?: number | null
          walk_score?: number | null
          zip_code?: string | null
          zone_code?: string | null
        }
        Update: {
          acres?: number | null
          address?: string | null
          assessed_value?: number | null
          bcpao_updated_at?: string | null
          building_value?: number | null
          census_tract?: string | null
          centroid_lat?: number | null
          centroid_lon?: number | null
          city?: string | null
          created_at?: string | null
          crime_score?: number | null
          demographics_updated_at?: string | null
          exemptions?: string | null
          geometry?: Json | null
          geometry_wkt?: string | null
          id?: number
          jurisdiction_id?: number
          land_value?: number | null
          last_sale_date?: string | null
          last_sale_price?: number | null
          legal_description?: string | null
          market_value?: number | null
          median_home_value?: number | null
          median_household_income?: number | null
          median_rent?: number | null
          owner_mailing_address?: string | null
          owner_name?: string | null
          parcel_id?: string
          photo_url?: string | null
          plat_book_page?: string | null
          poverty_rate?: number | null
          school_score?: number | null
          site_code?: string | null
          state?: string | null
          subdivision?: string | null
          tax_account?: string | null
          taxable_value?: number | null
          taxing_district?: string | null
          total_buildings?: number | null
          total_population?: number | null
          use_code?: string | null
          use_description?: string | null
          vacancy_rate?: number | null
          walk_score?: number | null
          zip_code?: string | null
          zone_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_sample_properties_jurisdiction"
            columns: ["jurisdiction_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_sample_properties_zone"
            columns: ["jurisdiction_id", "zone_code"]
            isOneToOne: false
            referencedRelation: "zoning_districts"
            referencedColumns: ["jurisdiction_id", "code"]
          },
          {
            foreignKeyName: "sample_properties_jurisdiction_id_fkey"
            columns: ["jurisdiction_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
        ]
      }
      scout_passes: {
        Row: {
          batch_number: number
          claimed_at: string | null
          county_access: Json | null
          created_at: string | null
          expires_at: string
          id: string
          pass_code: string
          quarter: string
          recipient_email: string | null
          recipient_id: string | null
          referrer_email: string
          referrer_id: string
          shared_at: string | null
          shared_via: string | null
          status: string
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }
        Insert: {
          batch_number?: number
          claimed_at?: string | null
          county_access?: Json | null
          created_at?: string | null
          expires_at: string
          id?: string
          pass_code?: string
          quarter: string
          recipient_email?: string | null
          recipient_id?: string | null
          referrer_email: string
          referrer_id: string
          shared_at?: string | null
          shared_via?: string | null
          status?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Update: {
          batch_number?: number
          claimed_at?: string | null
          county_access?: Json | null
          created_at?: string | null
          expires_at?: string
          id?: string
          pass_code?: string
          quarter?: string
          recipient_email?: string | null
          recipient_id?: string | null
          referrer_email?: string
          referrer_id?: string
          shared_at?: string | null
          shared_via?: string | null
          status?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      scrape_jobs: {
        Row: {
          completed_at: string | null
          county_name: string
          created_at: string | null
          error_message: string | null
          id: number
          jurisdiction_id: number | null
          phase: number | null
          records_extracted: number | null
          started_at: string | null
          status: string | null
        }
        Insert: {
          completed_at?: string | null
          county_name: string
          created_at?: string | null
          error_message?: string | null
          id?: number
          jurisdiction_id?: number | null
          phase?: number | null
          records_extracted?: number | null
          started_at?: string | null
          status?: string | null
        }
        Update: {
          completed_at?: string | null
          county_name?: string
          created_at?: string | null
          error_message?: string | null
          id?: number
          jurisdiction_id?: number | null
          phase?: number | null
          records_extracted?: number | null
          started_at?: string | null
          status?: string | null
        }
        Relationships: []
      }
      scrape_results: {
        Row: {
          created_at: string | null
          error_message: string | null
          id: string
          municipality: string
          raw_data: Json | null
          scraped_at: string
          state: string
          status: string
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          id?: string
          municipality: string
          raw_data?: Json | null
          scraped_at: string
          state: string
          status: string
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          id?: string
          municipality?: string
          raw_data?: Json | null
          scraped_at?: string
          state?: string
          status?: string
        }
        Relationships: []
      }
      site_plan_requirements: {
        Row: {
          created_at: string | null
          description: string
          id: string
          municipality_id: string | null
          requirement_type: string
          source_section: string | null
          threshold_unit: string | null
          threshold_value: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          municipality_id?: string | null
          requirement_type: string
          source_section?: string | null
          threshold_unit?: string | null
          threshold_value?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          municipality_id?: string | null
          requirement_type?: string
          source_section?: string | null
          threshold_unit?: string | null
          threshold_value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_plan_requirements_municipality_id_fkey"
            columns: ["municipality_id"]
            isOneToOne: false
            referencedRelation: "municipalities"
            referencedColumns: ["id"]
          },
        ]
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      speaking_engagements: {
        Row: {
          audience_size: number | null
          created_at: string | null
          event_date: string | null
          event_name: string
          event_type: string | null
          fee_usd: number | null
          id: string
          leads_generated: number | null
          location: string | null
          notes: string | null
          organizer: string | null
          recording_url: string | null
          stage_featured: number | null
          topic: string | null
        }
        Insert: {
          audience_size?: number | null
          created_at?: string | null
          event_date?: string | null
          event_name: string
          event_type?: string | null
          fee_usd?: number | null
          id?: string
          leads_generated?: number | null
          location?: string | null
          notes?: string | null
          organizer?: string | null
          recording_url?: string | null
          stage_featured?: number | null
          topic?: string | null
        }
        Update: {
          audience_size?: number | null
          created_at?: string | null
          event_date?: string | null
          event_name?: string
          event_type?: string | null
          fee_usd?: number | null
          id?: string
          leads_generated?: number | null
          location?: string | null
          notes?: string | null
          organizer?: string | null
          recording_url?: string | null
          stage_featured?: number | null
          topic?: string | null
        }
        Relationships: []
      }
      sprint_tasks: {
        Row: {
          assigned_to: string | null
          completed_at: string | null
          created_at: string | null
          description: string | null
          error_message: string | null
          id: string
          metadata: Json | null
          pr_url: string | null
          priority: number | null
          repo: string
          started_at: string | null
          status: string | null
          title: string
        }
        Insert: {
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          error_message?: string | null
          id?: string
          metadata?: Json | null
          pr_url?: string | null
          priority?: number | null
          repo: string
          started_at?: string | null
          status?: string | null
          title: string
        }
        Update: {
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          error_message?: string | null
          id?: string
          metadata?: Json | null
          pr_url?: string | null
          priority?: number | null
          repo?: string
          started_at?: string | null
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      stage_execution_logs: {
        Row: {
          case_id: string | null
          completed_at: string | null
          cost_usd: number | null
          created_at: string | null
          duration_ms: number | null
          errors: Json | null
          id: string
          input_summary: Json | null
          model_used: string | null
          output_summary: Json | null
          run_id: string
          stage_name: string | null
          stage_number: number
          started_at: string
          status: string | null
          tokens_used: number | null
        }
        Insert: {
          case_id?: string | null
          completed_at?: string | null
          cost_usd?: number | null
          created_at?: string | null
          duration_ms?: number | null
          errors?: Json | null
          id?: string
          input_summary?: Json | null
          model_used?: string | null
          output_summary?: Json | null
          run_id: string
          stage_name?: string | null
          stage_number: number
          started_at: string
          status?: string | null
          tokens_used?: number | null
        }
        Update: {
          case_id?: string | null
          completed_at?: string | null
          cost_usd?: number | null
          created_at?: string | null
          duration_ms?: number | null
          errors?: Json | null
          id?: string
          input_summary?: Json | null
          model_used?: string | null
          output_summary?: Json | null
          run_id?: string
          stage_name?: string | null
          stage_number?: number
          started_at?: string
          status?: string | null
          tokens_used?: number | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          email: string
          id: string
          name: string | null
          status: string | null
          subscribed_at: string | null
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          name?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          name?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan: string
          queries_used: number
          query_limit: number
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string
          queries_used?: number
          query_limit?: number
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string
          queries_used?: number
          query_limit?: number
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      task_completion_streaks: {
        Row: {
          badges: Json | null
          completion_rate: number | null
          created_at: string | null
          current_streak: number | null
          id: number
          last_completion_date: string | null
          longest_streak: number | null
          streak_start_date: string | null
          total_tasks_abandoned: number | null
          total_tasks_completed: number | null
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          badges?: Json | null
          completion_rate?: number | null
          created_at?: string | null
          current_streak?: number | null
          id?: number
          last_completion_date?: string | null
          longest_streak?: number | null
          streak_start_date?: string | null
          total_tasks_abandoned?: number | null
          total_tasks_completed?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          badges?: Json | null
          completion_rate?: number | null
          created_at?: string | null
          current_streak?: number | null
          id?: number
          last_completion_date?: string | null
          longest_streak?: number | null
          streak_start_date?: string | null
          total_tasks_abandoned?: number | null
          total_tasks_completed?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      task_executions: {
        Row: {
          blocker_type: string | null
          blocks_completion: boolean | null
          command: string
          command_params: Json | null
          creates_deliverable: boolean | null
          deliverable_path: string | null
          error_message: string | null
          executed_at: string | null
          execution_id: number
          execution_time_ms: number | null
          is_final_attempt: boolean | null
          result_summary: string | null
          retry_count: number | null
          session_context: Json | null
          status: string | null
          task_id: string | null
          tool_name: string
        }
        Insert: {
          blocker_type?: string | null
          blocks_completion?: boolean | null
          command: string
          command_params?: Json | null
          creates_deliverable?: boolean | null
          deliverable_path?: string | null
          error_message?: string | null
          executed_at?: string | null
          execution_id?: number
          execution_time_ms?: number | null
          is_final_attempt?: boolean | null
          result_summary?: string | null
          retry_count?: number | null
          session_context?: Json | null
          status?: string | null
          task_id?: string | null
          tool_name: string
        }
        Update: {
          blocker_type?: string | null
          blocks_completion?: boolean | null
          command?: string
          command_params?: Json | null
          creates_deliverable?: boolean | null
          deliverable_path?: string | null
          error_message?: string | null
          executed_at?: string | null
          execution_id?: number
          execution_time_ms?: number | null
          is_final_attempt?: boolean | null
          result_summary?: string | null
          retry_count?: number | null
          session_context?: Json | null
          status?: string | null
          task_id?: string | null
          tool_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_executions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "active_tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "task_executions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "v_tasks_needing_attention"
            referencedColumns: ["task_id"]
          },
        ]
      }
      task_interventions: {
        Row: {
          abandonment_probability: number | null
          domain: string | null
          id: number
          intervention_level: number | null
          intervention_type: string
          message: string | null
          minutes_since_start: number | null
          ml_predicted_success: number | null
          reasoning: string | null
          risk_level: string | null
          successful: boolean | null
          task_complexity: number | null
          task_description: string | null
          task_id: number | null
          time_to_response: number | null
          timestamp: string | null
          triggered_at: string | null
          user_id: number | null
          user_response: string | null
        }
        Insert: {
          abandonment_probability?: number | null
          domain?: string | null
          id?: number
          intervention_level?: number | null
          intervention_type: string
          message?: string | null
          minutes_since_start?: number | null
          ml_predicted_success?: number | null
          reasoning?: string | null
          risk_level?: string | null
          successful?: boolean | null
          task_complexity?: number | null
          task_description?: string | null
          task_id?: number | null
          time_to_response?: number | null
          timestamp?: string | null
          triggered_at?: string | null
          user_id?: number | null
          user_response?: string | null
        }
        Update: {
          abandonment_probability?: number | null
          domain?: string | null
          id?: number
          intervention_level?: number | null
          intervention_type?: string
          message?: string | null
          minutes_since_start?: number | null
          ml_predicted_success?: number | null
          reasoning?: string | null
          risk_level?: string | null
          successful?: boolean | null
          task_complexity?: number | null
          task_description?: string | null
          task_id?: number | null
          time_to_response?: number | null
          timestamp?: string | null
          triggered_at?: string | null
          user_id?: number | null
          user_response?: string | null
        }
        Relationships: []
      }
      task_states: {
        Row: {
          abandoned_at: string | null
          artifacts_created: string[] | null
          blocked_at: string | null
          blocked_reason: string | null
          clarity: number | null
          completed_at: string | null
          complexity: number | null
          deferred_at: string | null
          description: string
          domain: string | null
          estimated_minutes: number | null
          id: number
          in_progress_at: string | null
          initiated_at: string | null
          session_id: string | null
          solution_provided_at: string | null
          status: string | null
          task_id: string
          updated_at: string | null
          verification_details: string | null
          verification_status: string | null
        }
        Insert: {
          abandoned_at?: string | null
          artifacts_created?: string[] | null
          blocked_at?: string | null
          blocked_reason?: string | null
          clarity?: number | null
          completed_at?: string | null
          complexity?: number | null
          deferred_at?: string | null
          description: string
          domain?: string | null
          estimated_minutes?: number | null
          id?: number
          in_progress_at?: string | null
          initiated_at?: string | null
          session_id?: string | null
          solution_provided_at?: string | null
          status?: string | null
          task_id: string
          updated_at?: string | null
          verification_details?: string | null
          verification_status?: string | null
        }
        Update: {
          abandoned_at?: string | null
          artifacts_created?: string[] | null
          blocked_at?: string | null
          blocked_reason?: string | null
          clarity?: number | null
          completed_at?: string | null
          complexity?: number | null
          deferred_at?: string | null
          description?: string
          domain?: string | null
          estimated_minutes?: number | null
          id?: number
          in_progress_at?: string | null
          initiated_at?: string | null
          session_id?: string | null
          solution_provided_at?: string | null
          status?: string | null
          task_id?: string
          updated_at?: string | null
          verification_details?: string | null
          verification_status?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          abandoned_at: string | null
          abandonment_reason: string | null
          actual_time_minutes: number | null
          blockage_reason: string | null
          category: string | null
          completed_at: string | null
          created_at: string | null
          deferred_to: string | null
          description: string
          domain: string | null
          estimated_time_minutes: number | null
          id: number
          instruction_clarity: number | null
          predicted_abandonment_risk: number | null
          priority: string | null
          solution_provided_at: string | null
          started_at: string | null
          status: string | null
          steps_required: number | null
          task_complexity: number | null
          timezone: string | null
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          abandoned_at?: string | null
          abandonment_reason?: string | null
          actual_time_minutes?: number | null
          blockage_reason?: string | null
          category?: string | null
          completed_at?: string | null
          created_at?: string | null
          deferred_to?: string | null
          description: string
          domain?: string | null
          estimated_time_minutes?: number | null
          id?: number
          instruction_clarity?: number | null
          predicted_abandonment_risk?: number | null
          priority?: string | null
          solution_provided_at?: string | null
          started_at?: string | null
          status?: string | null
          steps_required?: number | null
          task_complexity?: number | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          abandoned_at?: string | null
          abandonment_reason?: string | null
          actual_time_minutes?: number | null
          blockage_reason?: string | null
          category?: string | null
          completed_at?: string | null
          created_at?: string | null
          deferred_to?: string | null
          description?: string
          domain?: string | null
          estimated_time_minutes?: number | null
          id?: number
          instruction_clarity?: number | null
          predicted_abandonment_risk?: number | null
          priority?: string | null
          solution_provided_at?: string | null
          started_at?: string | null
          status?: string | null
          steps_required?: number | null
          task_complexity?: number | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      tax_agent_decisions: {
        Row: {
          action_taken: string | null
          analysis: string | null
          confidence_score: number | null
          created_at: string | null
          decision_date: string | null
          decision_type: string
          id: string
          input_data: Json | null
          model_used: string | null
          outcome: string | null
          recommendation: string | null
        }
        Insert: {
          action_taken?: string | null
          analysis?: string | null
          confidence_score?: number | null
          created_at?: string | null
          decision_date?: string | null
          decision_type: string
          id?: string
          input_data?: Json | null
          model_used?: string | null
          outcome?: string | null
          recommendation?: string | null
        }
        Update: {
          action_taken?: string | null
          analysis?: string | null
          confidence_score?: number | null
          created_at?: string | null
          decision_date?: string | null
          decision_type?: string
          id?: string
          input_data?: Json | null
          model_used?: string | null
          outcome?: string | null
          recommendation?: string | null
        }
        Relationships: []
      }
      tax_optimization_actions: {
        Row: {
          action_type: string
          completed: boolean | null
          completed_date: string | null
          created_at: string | null
          deadline: string | null
          description: string
          id: string
          impact_on_magi: number | null
          potential_savings: number | null
          priority: number | null
          result: string | null
          tax_year_id: string | null
        }
        Insert: {
          action_type: string
          completed?: boolean | null
          completed_date?: string | null
          created_at?: string | null
          deadline?: string | null
          description: string
          id?: string
          impact_on_magi?: number | null
          potential_savings?: number | null
          priority?: number | null
          result?: string | null
          tax_year_id?: string | null
        }
        Update: {
          action_type?: string
          completed?: boolean | null
          completed_date?: string | null
          created_at?: string | null
          deadline?: string | null
          description?: string
          id?: string
          impact_on_magi?: number | null
          potential_savings?: number | null
          priority?: number | null
          result?: string | null
          tax_year_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tax_optimization_actions_tax_year_id_fkey"
            columns: ["tax_year_id"]
            isOneToOne: false
            referencedRelation: "tax_years"
            referencedColumns: ["id"]
          },
        ]
      }
      tax_years: {
        Row: {
          created_at: string | null
          filer_name: string
          filing_status: string | null
          id: string
          income_goal: number | null
          target_program: string | null
          updated_at: string | null
          year: number
        }
        Insert: {
          created_at?: string | null
          filer_name: string
          filing_status?: string | null
          id?: string
          income_goal?: number | null
          target_program?: string | null
          updated_at?: string | null
          year: number
        }
        Update: {
          created_at?: string | null
          filer_name?: string
          filing_status?: string | null
          id?: string
          income_goal?: number | null
          target_program?: string | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      thought_leadership: {
        Row: {
          content_type: string
          created_at: string | null
          description: string | null
          engagement_metrics: Json | null
          id: string
          is_published: boolean | null
          platform: string | null
          published_at: string | null
          related_stage: number | null
          title: string
          url: string | null
        }
        Insert: {
          content_type: string
          created_at?: string | null
          description?: string | null
          engagement_metrics?: Json | null
          id?: string
          is_published?: boolean | null
          platform?: string | null
          published_at?: string | null
          related_stage?: number | null
          title: string
          url?: string | null
        }
        Update: {
          content_type?: string
          created_at?: string | null
          description?: string | null
          engagement_metrics?: Json | null
          id?: string
          is_published?: boolean | null
          platform?: string | null
          published_at?: string | null
          related_stage?: number | null
          title?: string
          url?: string | null
        }
        Relationships: []
      }
      tool_calls: {
        Row: {
          error_message: string | null
          execution_time_ms: number | null
          id: number
          message_id: number | null
          result_summary: string | null
          session_id: string
          success: boolean | null
          timestamp: string | null
          tool_description: string | null
          tool_name: string
        }
        Insert: {
          error_message?: string | null
          execution_time_ms?: number | null
          id?: number
          message_id?: number | null
          result_summary?: string | null
          session_id: string
          success?: boolean | null
          timestamp?: string | null
          tool_description?: string | null
          tool_name: string
        }
        Update: {
          error_message?: string | null
          execution_time_ms?: number | null
          id?: number
          message_id?: number | null
          result_summary?: string | null
          session_id?: string
          success?: boolean | null
          timestamp?: string | null
          tool_description?: string | null
          tool_name?: string
        }
        Relationships: []
      }
      twitter_queue: {
        Row: {
          content_id: string
          created_at: string | null
          id: string
          scheduled_time: string | null
          status: string | null
          tweets: Json
        }
        Insert: {
          content_id: string
          created_at?: string | null
          id?: string
          scheduled_time?: string | null
          status?: string | null
          tweets: Json
        }
        Update: {
          content_id?: string
          created_at?: string | null
          id?: string
          scheduled_time?: string | null
          status?: string | null
          tweets?: Json
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string | null
          data_confidence: number | null
          email: string | null
          exit_preferences: string[] | null
          foreclosure_profile: Json | null
          interactions_count: number | null
          risk_tolerance: string | null
          sale_type_preference: string | null
          strategy_summary: string | null
          tax_deed_profile: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data_confidence?: number | null
          email?: string | null
          exit_preferences?: string[] | null
          foreclosure_profile?: Json | null
          interactions_count?: number | null
          risk_tolerance?: string | null
          sale_type_preference?: string | null
          strategy_summary?: string | null
          tax_deed_profile?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          data_confidence?: number | null
          email?: string | null
          exit_preferences?: string[] | null
          foreclosure_profile?: Json | null
          interactions_count?: number | null
          risk_tolerance?: string | null
          sale_type_preference?: string | null
          strategy_summary?: string | null
          tax_deed_profile?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          name: string
          open_id: string | null
          role: string | null
          secondary_timezone: string | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          open_id?: string | null
          role?: string | null
          secondary_timezone?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          open_id?: string | null
          role?: string | null
          secondary_timezone?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      validation_flags: {
        Row: {
          county: string | null
          created_at: string | null
          district_code: string | null
          expected: string | null
          field: string
          id: number
          jurisdiction: string | null
          message: string | null
          resolved: boolean | null
          resolved_at: string | null
          rule: string
          severity: string
          value: number | null
          zone_standard_id: number | null
        }
        Insert: {
          county?: string | null
          created_at?: string | null
          district_code?: string | null
          expected?: string | null
          field: string
          id?: number
          jurisdiction?: string | null
          message?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          rule: string
          severity?: string
          value?: number | null
          zone_standard_id?: number | null
        }
        Update: {
          county?: string | null
          created_at?: string | null
          district_code?: string | null
          expected?: string | null
          field?: string
          id?: number
          jurisdiction?: string | null
          message?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          rule?: string
          severity?: string
          value?: number | null
          zone_standard_id?: number | null
        }
        Relationships: []
      }
      weekly_metrics_summary: {
        Row: {
          action_items: string[] | null
          api_cost_usd: number | null
          auctions_analyzed: number | null
          avg_task_duration_minutes: number | null
          bid_recommendations: number | null
          bug_prevention_rate: number | null
          bugs_caught_validation: number | null
          bugs_reached_production: number | null
          claude_md_updates: number | null
          concerns: string | null
          created_at: string
          deployment_success_rate: number | null
          deployments_attempted: number | null
          deployments_successful: number | null
          highlights: string | null
          id: string
          mean_time_to_recovery_minutes: number | null
          new_patterns_added: number | null
          review_recommendations: number | null
          reviewed_at: string | null
          reviewed_by: string | null
          skip_recommendations: number | null
          smart_router_free_tier_percent: number | null
          task_completion_rate: number | null
          tasks_abandoned: number | null
          tasks_completed: number | null
          validation_checklists_used: number | null
          week_end_date: string
          week_start_date: string
        }
        Insert: {
          action_items?: string[] | null
          api_cost_usd?: number | null
          auctions_analyzed?: number | null
          avg_task_duration_minutes?: number | null
          bid_recommendations?: number | null
          bug_prevention_rate?: number | null
          bugs_caught_validation?: number | null
          bugs_reached_production?: number | null
          claude_md_updates?: number | null
          concerns?: string | null
          created_at?: string
          deployment_success_rate?: number | null
          deployments_attempted?: number | null
          deployments_successful?: number | null
          highlights?: string | null
          id?: string
          mean_time_to_recovery_minutes?: number | null
          new_patterns_added?: number | null
          review_recommendations?: number | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          skip_recommendations?: number | null
          smart_router_free_tier_percent?: number | null
          task_completion_rate?: number | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          validation_checklists_used?: number | null
          week_end_date: string
          week_start_date: string
        }
        Update: {
          action_items?: string[] | null
          api_cost_usd?: number | null
          auctions_analyzed?: number | null
          avg_task_duration_minutes?: number | null
          bid_recommendations?: number | null
          bug_prevention_rate?: number | null
          bugs_caught_validation?: number | null
          bugs_reached_production?: number | null
          claude_md_updates?: number | null
          concerns?: string | null
          created_at?: string
          deployment_success_rate?: number | null
          deployments_attempted?: number | null
          deployments_successful?: number | null
          highlights?: string | null
          id?: string
          mean_time_to_recovery_minutes?: number | null
          new_patterns_added?: number | null
          review_recommendations?: number | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          skip_recommendations?: number | null
          smart_router_free_tier_percent?: number | null
          task_completion_rate?: number | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          validation_checklists_used?: number | null
          week_end_date?: string
          week_start_date?: string
        }
        Relationships: []
      }
      whatsapp_attachments: {
        Row: {
          created_at: string | null
          duration_seconds: number | null
          file_extension: string | null
          file_size_bytes: number | null
          file_type: string
          group_id: string | null
          height: number | null
          id: string
          message_id: string | null
          metadata: Json | null
          mime_type: string | null
          original_filename: string
          storage_path: string | null
          storage_url: string | null
          thumbnail_path: string | null
          uploaded_at: string
          uploaded_by: string
          width: number | null
        }
        Insert: {
          created_at?: string | null
          duration_seconds?: number | null
          file_extension?: string | null
          file_size_bytes?: number | null
          file_type: string
          group_id?: string | null
          height?: number | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          mime_type?: string | null
          original_filename: string
          storage_path?: string | null
          storage_url?: string | null
          thumbnail_path?: string | null
          uploaded_at: string
          uploaded_by: string
          width?: number | null
        }
        Update: {
          created_at?: string | null
          duration_seconds?: number | null
          file_extension?: string | null
          file_size_bytes?: number | null
          file_type?: string
          group_id?: string | null
          height?: number | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          mime_type?: string | null
          original_filename?: string
          storage_path?: string | null
          storage_url?: string | null
          thumbnail_path?: string | null
          uploaded_at?: string
          uploaded_by?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_attachments_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "whatsapp_attachments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_groups: {
        Row: {
          created_at: string | null
          date_range_end: string | null
          date_range_start: string | null
          export_date: string | null
          group_identifier: string | null
          group_name: string
          id: string
          metadata: Json | null
          total_messages: number | null
          total_participants: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_range_end?: string | null
          date_range_start?: string | null
          export_date?: string | null
          group_identifier?: string | null
          group_name: string
          id?: string
          metadata?: Json | null
          total_messages?: number | null
          total_participants?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_range_end?: string | null
          date_range_start?: string | null
          export_date?: string | null
          group_identifier?: string | null
          group_name?: string
          id?: string
          metadata?: Json | null
          total_messages?: number | null
          total_participants?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      whatsapp_insights: {
        Row: {
          generated_at: string | null
          group_id: string | null
          id: string
          insight_data: Json
          insight_type: string
          metadata: Json | null
        }
        Insert: {
          generated_at?: string | null
          group_id?: string | null
          id?: string
          insight_data: Json
          insight_type: string
          metadata?: Json | null
        }
        Update: {
          generated_at?: string | null
          group_id?: string | null
          id?: string
          insight_data?: Json
          insight_type?: string
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_insights_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_links: {
        Row: {
          created_at: string | null
          group_id: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          share_count: number | null
          shared_at: string
          shared_by: string
          url: string
          url_description: string | null
          url_domain: string | null
          url_preview_image: string | null
          url_title: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          share_count?: number | null
          shared_at: string
          shared_by: string
          url: string
          url_description?: string | null
          url_domain?: string | null
          url_preview_image?: string | null
          url_title?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          share_count?: number | null
          shared_at?: string
          shared_by?: string
          url?: string
          url_description?: string | null
          url_domain?: string | null
          url_preview_image?: string | null
          url_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_links_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "whatsapp_links_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_messages: {
        Row: {
          created_at: string | null
          group_id: string | null
          has_media: boolean | null
          id: string
          is_reply: boolean | null
          media_filename: string | null
          message_text: string | null
          message_timestamp: string
          message_type: string | null
          metadata: Json | null
          reply_to_sender: string | null
          sender_name: string
          sender_phone: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          has_media?: boolean | null
          id?: string
          is_reply?: boolean | null
          media_filename?: string | null
          message_text?: string | null
          message_timestamp: string
          message_type?: string | null
          metadata?: Json | null
          reply_to_sender?: string | null
          sender_name: string
          sender_phone?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          has_media?: boolean | null
          id?: string
          is_reply?: boolean | null
          media_filename?: string | null
          message_text?: string | null
          message_timestamp?: string
          message_type?: string | null
          metadata?: Json | null
          reply_to_sender?: string | null
          sender_name?: string
          sender_phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_messages_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      whatsapp_processing_jobs: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          group_id: string | null
          id: string
          job_status: string | null
          job_type: string | null
          metadata: Json | null
          started_at: string | null
          total_attachments_processed: number | null
          total_links_extracted: number | null
          total_messages_processed: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          group_id?: string | null
          id?: string
          job_status?: string | null
          job_type?: string | null
          metadata?: Json | null
          started_at?: string | null
          total_attachments_processed?: number | null
          total_links_extracted?: number | null
          total_messages_processed?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          group_id?: string | null
          id?: string
          job_status?: string | null
          job_type?: string | null
          metadata?: Json | null
          started_at?: string | null
          total_attachments_processed?: number | null
          total_links_extracted?: number | null
          total_messages_processed?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_processing_jobs_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "whatsapp_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_scripts: {
        Row: {
          content_id: string
          created_at: string | null
          cta: string | null
          hook: string | null
          id: string
          sections: Json
          status: string | null
          title: string
        }
        Insert: {
          content_id: string
          created_at?: string | null
          cta?: string | null
          hook?: string | null
          id?: string
          sections: Json
          status?: string | null
          title: string
        }
        Update: {
          content_id?: string
          created_at?: string | null
          cta?: string | null
          hook?: string | null
          id?: string
          sections?: Json
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      zone_standards: {
        Row: {
          buffer_requirements: string | null
          confidence_score: number | null
          corner_setback_ft: number | null
          effective_date: string | null
          front_setback_ft: number | null
          id: number
          landscaping_requirements: string | null
          max_density_du_acre: number | null
          max_far: number | null
          max_height_ft: number | null
          max_impervious_pct: number | null
          max_lot_coverage_pct: number | null
          max_stories: number | null
          min_lot_depth_ft: number | null
          min_lot_sqft: number | null
          min_lot_width_ft: number | null
          min_open_space_pct: number | null
          ordinance_section: string | null
          parking_per_1000sf: number | null
          parking_per_unit: number | null
          rear_setback_ft: number | null
          scraped_at: string | null
          side_setback_ft: number | null
          source_url: string | null
          zoning_district_id: number | null
        }
        Insert: {
          buffer_requirements?: string | null
          confidence_score?: number | null
          corner_setback_ft?: number | null
          effective_date?: string | null
          front_setback_ft?: number | null
          id?: number
          landscaping_requirements?: string | null
          max_density_du_acre?: number | null
          max_far?: number | null
          max_height_ft?: number | null
          max_impervious_pct?: number | null
          max_lot_coverage_pct?: number | null
          max_stories?: number | null
          min_lot_depth_ft?: number | null
          min_lot_sqft?: number | null
          min_lot_width_ft?: number | null
          min_open_space_pct?: number | null
          ordinance_section?: string | null
          parking_per_1000sf?: number | null
          parking_per_unit?: number | null
          rear_setback_ft?: number | null
          scraped_at?: string | null
          side_setback_ft?: number | null
          source_url?: string | null
          zoning_district_id?: number | null
        }
        Update: {
          buffer_requirements?: string | null
          confidence_score?: number | null
          corner_setback_ft?: number | null
          effective_date?: string | null
          front_setback_ft?: number | null
          id?: number
          landscaping_requirements?: string | null
          max_density_du_acre?: number | null
          max_far?: number | null
          max_height_ft?: number | null
          max_impervious_pct?: number | null
          max_lot_coverage_pct?: number | null
          max_stories?: number | null
          min_lot_depth_ft?: number | null
          min_lot_sqft?: number | null
          min_lot_width_ft?: number | null
          min_open_space_pct?: number | null
          ordinance_section?: string | null
          parking_per_1000sf?: number | null
          parking_per_unit?: number | null
          rear_setback_ft?: number | null
          scraped_at?: string | null
          side_setback_ft?: number | null
          source_url?: string | null
          zoning_district_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "zone_standards_zoning_district_id_fkey"
            columns: ["zoning_district_id"]
            isOneToOne: true
            referencedRelation: "zoning_districts"
            referencedColumns: ["id"]
          },
        ]
      }
      zonewise_kpis: {
        Row: {
          category: string
          competitive_source: string | null
          created_at: string | null
          data_source: string | null
          description: string | null
          example_value: string | null
          formula: string | null
          id: number
          is_exclusive: boolean | null
          kpi_code: string
          kpi_name: string
          subcategory: string | null
          ui_display_order: number | null
          ui_panel: string | null
          unit: string | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          category: string
          competitive_source?: string | null
          created_at?: string | null
          data_source?: string | null
          description?: string | null
          example_value?: string | null
          formula?: string | null
          id?: number
          is_exclusive?: boolean | null
          kpi_code: string
          kpi_name: string
          subcategory?: string | null
          ui_display_order?: number | null
          ui_panel?: string | null
          unit?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          category?: string
          competitive_source?: string | null
          created_at?: string | null
          data_source?: string | null
          description?: string | null
          example_value?: string | null
          formula?: string | null
          id?: number
          is_exclusive?: boolean | null
          kpi_code?: string
          kpi_name?: string
          subcategory?: string | null
          ui_display_order?: number | null
          ui_panel?: string | null
          unit?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      zoning_audit_log: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          id: string
          new_data: Json | null
          old_data: Json | null
          operation: string
          record_id: number | null
          table_name: string
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          operation: string
          record_id?: number | null
          table_name: string
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          operation?: string
          record_id?: number | null
          table_name?: string
        }
        Relationships: []
      }
      zoning_districts: {
        Row: {
          category: string | null
          code: string
          created_at: string | null
          description: string | null
          effective_date: string | null
          id: number
          jurisdiction_id: number
          name: string
          ordinance_section: string | null
        }
        Insert: {
          category?: string | null
          code: string
          created_at?: string | null
          description?: string | null
          effective_date?: string | null
          id?: number
          jurisdiction_id: number
          name: string
          ordinance_section?: string | null
        }
        Update: {
          category?: string | null
          code?: string
          created_at?: string | null
          description?: string | null
          effective_date?: string | null
          id?: number
          jurisdiction_id?: number
          name?: string
          ordinance_section?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "zoning_districts_jurisdiction_id_fkey"
            columns: ["jurisdiction_id"]
            isOneToOne: false
            referencedRelation: "jurisdictions"
            referencedColumns: ["id"]
          },
        ]
      }
      zoning_requirements: {
        Row: {
          additional_requirements: Json | null
          created_at: string | null
          district: string
          front_setback: number | null
          id: number
          jurisdiction: string
          max_coverage: number | null
          max_height: number | null
          min_lot_size: number | null
          min_lot_width: number | null
          rear_setback: number | null
          requirement_type: string | null
          side_setback: number | null
          updated_at: string | null
        }
        Insert: {
          additional_requirements?: Json | null
          created_at?: string | null
          district: string
          front_setback?: number | null
          id?: number
          jurisdiction: string
          max_coverage?: number | null
          max_height?: number | null
          min_lot_size?: number | null
          min_lot_width?: number | null
          rear_setback?: number | null
          requirement_type?: string | null
          side_setback?: number | null
          updated_at?: string | null
        }
        Update: {
          additional_requirements?: Json | null
          created_at?: string | null
          district?: string
          front_setback?: number | null
          id?: number
          jurisdiction?: string
          max_coverage?: number | null
          max_height?: number | null
          min_lot_size?: number | null
          min_lot_width?: number | null
          rear_setback?: number | null
          requirement_type?: string | null
          side_setback?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      zw_chat_messages: {
        Row: {
          artifacts: Json | null
          content: string
          created_at: string | null
          id: string
          role: string
          session_id: string
        }
        Insert: {
          artifacts?: Json | null
          content: string
          created_at?: string | null
          id?: string
          role: string
          session_id: string
        }
        Update: {
          artifacts?: Json | null
          content?: string
          created_at?: string | null
          id?: string
          role?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "zw_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "zw_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      zw_chat_sessions: {
        Row: {
          created_at: string | null
          id: string
          query_count: number | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          query_count?: number | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          query_count?: number | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      approval_decisions: {
        Row: {
          approval_type: string | null
          approved: boolean | null
          approver: string | null
          decision_timestamp: string | null
          event_id: string | null
          reason: string | null
          timestamp: string | null
          user_id: string | null
          workflow_id: string | null
        }
        Insert: {
          approval_type?: never
          approved?: never
          approver?: never
          decision_timestamp?: never
          event_id?: string | null
          reason?: never
          timestamp?: string | null
          user_id?: string | null
          workflow_id?: string | null
        }
        Update: {
          approval_type?: never
          approved?: never
          approver?: never
          decision_timestamp?: never
          event_id?: string | null
          reason?: never
          timestamp?: string | null
          user_id?: string | null
          workflow_id?: string | null
        }
        Relationships: []
      }
      ci_latest_analyses: {
        Row: {
          analyzed_at: string | null
          competitor_id: string | null
          competitor_name: string | null
          features: Json | null
          id: string | null
          pricing_signals: Json | null
          ui_patterns: Json | null
          video_url: string | null
        }
        Relationships: []
      }
      current_week_metrics: {
        Row: {
          bug_prevention_rate: number | null
          bugs_caught_validation: number | null
          bugs_reached_production: number | null
          claude_md_updates: number | null
          deployment_success_rate: number | null
          deployments_failed: number | null
          deployments_successful: number | null
          tasks_abandoned: number | null
          tasks_completed: number | null
        }
        Relationships: []
      }
      daily_productivity_summary: {
        Row: {
          completion_rate: number | null
          current_streak: number | null
          date: string | null
          energy_level: number | null
          productivity_score: number | null
          sleep_hours: number | null
          tasks_abandoned: number | null
          tasks_completed: number | null
          total_active_minutes: number | null
        }
        Relationships: []
      }
      firecrawl_monthly_costs: {
        Row: {
          avg_credits_per_request: number | null
          failed_requests: number | null
          month: string | null
          successful_requests: number | null
          total_cost_usd: number | null
          total_credits: number | null
          total_requests: number | null
          unique_zips: number | null
        }
        Relationships: []
      }
      firecrawl_zip_insights: {
        Row: {
          avg_credits_per_property: number | null
          avg_insights_per_property: number | null
          last_researched: string | null
          research_count: number | null
          total_credits: number | null
          total_insights: number | null
          zip_code: string | null
        }
        Relationships: []
      }
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown
          f_table_catalog: unknown
          f_table_name: unknown
          f_table_schema: unknown
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown
          f_table_catalog: string | null
          f_table_name: unknown
          f_table_schema: unknown
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown
          f_table_catalog?: string | null
          f_table_name?: unknown
          f_table_schema?: unknown
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown
          f_table_catalog?: string | null
          f_table_name?: unknown
          f_table_schema?: unknown
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
      il_active_listings: {
        Row: {
          address_city: string | null
          address_neighborhood: string | null
          address_street: string | null
          agent_email: string | null
          agent_name: string | null
          agent_phone: string | null
          building_floors: number | null
          construction_status: string | null
          currency: string | null
          days_on_market: number | null
          description_en: string | null
          description_he: string | null
          external_id: string | null
          features: Json | null
          first_seen_at: string | null
          floor: number | null
          id: number | null
          images: string[] | null
          lat: number | null
          listing_type: string | null
          listing_url: string | null
          location: unknown
          long: number | null
          neighborhood_avg_price_per_sqm: number | null
          neighborhood_market_status: string | null
          neighborhood_price_trend: string | null
          parking_spots: number | null
          price_assessment: string | null
          price_current: number | null
          price_original: number | null
          price_per_sqm: number | null
          property_type: string | null
          rooms: number | null
          scraped_at: string | null
          source: string | null
          square_meters: number | null
          status: string | null
          status_changed_at: string | null
          updated_at: string | null
          year_built: number | null
        }
        Relationships: []
      }
      il_city_summary: {
        Row: {
          avg_days_on_market: number | null
          avg_price: number | null
          avg_price_per_sqm: number | null
          avg_rooms: number | null
          city: string | null
          listing_type: string | null
          max_price: number | null
          min_price: number | null
          total_listings: number | null
        }
        Relationships: []
      }
      il_recent_transactions: {
        Row: {
          address: string | null
          buyer_name: string | null
          city: string | null
          floor: number | null
          id: number | null
          is_outlier: boolean | null
          location: unknown
          neighborhood: string | null
          outlier_detected_at: string | null
          outlier_reason: string | null
          price_per_sqm: number | null
          property_type: string | null
          rooms: number | null
          sale_date: string | null
          sale_month: number | null
          sale_price: number | null
          sale_year: number | null
          scraped_at: string | null
          seller_name: string | null
          source: string | null
          square_meters: number | null
          tax_paid: number | null
          transaction_id: string | null
          year_built: number | null
        }
        Insert: {
          address?: string | null
          buyer_name?: string | null
          city?: string | null
          floor?: number | null
          id?: number | null
          is_outlier?: boolean | null
          location?: unknown
          neighborhood?: string | null
          outlier_detected_at?: string | null
          outlier_reason?: string | null
          price_per_sqm?: number | null
          property_type?: string | null
          rooms?: number | null
          sale_date?: string | null
          sale_month?: never
          sale_price?: number | null
          sale_year?: never
          scraped_at?: string | null
          seller_name?: string | null
          source?: string | null
          square_meters?: number | null
          tax_paid?: number | null
          transaction_id?: string | null
          year_built?: number | null
        }
        Update: {
          address?: string | null
          buyer_name?: string | null
          city?: string | null
          floor?: number | null
          id?: number | null
          is_outlier?: boolean | null
          location?: unknown
          neighborhood?: string | null
          outlier_detected_at?: string | null
          outlier_reason?: string | null
          price_per_sqm?: number | null
          property_type?: string | null
          rooms?: number | null
          sale_date?: string | null
          sale_month?: never
          sale_price?: number | null
          sale_year?: never
          scraped_at?: string | null
          seller_name?: string | null
          source?: string | null
          square_meters?: number | null
          tax_paid?: number | null
          transaction_id?: string | null
          year_built?: number | null
        }
        Relationships: []
      }
      intervention_effectiveness: {
        Row: {
          intervention_level: number | null
          intervention_type: string | null
          success_rate: number | null
          successful: number | null
          total_attempts: number | null
        }
        Relationships: []
      }
      security_violations: {
        Row: {
          checksum: string | null
          details: Json | null
          event_id: string | null
          timestamp: string | null
          violation_type: string | null
          workflow_id: string | null
        }
        Insert: {
          checksum?: string | null
          details?: Json | null
          event_id?: string | null
          timestamp?: string | null
          violation_type?: string | null
          workflow_id?: string | null
        }
        Update: {
          checksum?: string | null
          details?: Json | null
          event_id?: string | null
          timestamp?: string | null
          violation_type?: string | null
          workflow_id?: string | null
        }
        Relationships: []
      }
      tasks_needing_intervention: {
        Row: {
          abandoned_at: string | null
          abandonment_reason: string | null
          actual_time_minutes: number | null
          blockage_reason: string | null
          category: string | null
          completed_at: string | null
          created_at: string | null
          deferred_to: string | null
          description: string | null
          domain: string | null
          estimated_time_minutes: number | null
          id: number | null
          instruction_clarity: number | null
          minutes_since_solution: number | null
          predicted_abandonment_risk: number | null
          priority: string | null
          recommended_intervention_level: number | null
          solution_provided_at: string | null
          started_at: string | null
          status: string | null
          steps_required: number | null
          task_complexity: number | null
          timezone: string | null
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          abandoned_at?: string | null
          abandonment_reason?: string | null
          actual_time_minutes?: number | null
          blockage_reason?: string | null
          category?: string | null
          completed_at?: string | null
          created_at?: string | null
          deferred_to?: string | null
          description?: string | null
          domain?: string | null
          estimated_time_minutes?: number | null
          id?: number | null
          instruction_clarity?: number | null
          minutes_since_solution?: never
          predicted_abandonment_risk?: number | null
          priority?: string | null
          recommended_intervention_level?: never
          solution_provided_at?: string | null
          started_at?: string | null
          status?: string | null
          steps_required?: number | null
          task_complexity?: number | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          abandoned_at?: string | null
          abandonment_reason?: string | null
          actual_time_minutes?: number | null
          blockage_reason?: string | null
          category?: string | null
          completed_at?: string | null
          created_at?: string | null
          deferred_to?: string | null
          description?: string | null
          domain?: string | null
          estimated_time_minutes?: number | null
          id?: number | null
          instruction_clarity?: number | null
          minutes_since_solution?: never
          predicted_abandonment_risk?: number | null
          priority?: string | null
          recommended_intervention_level?: never
          solution_provided_at?: string | null
          started_at?: string | null
          status?: string | null
          steps_required?: number | null
          task_complexity?: number | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      top_issues_this_week: {
        Row: {
          caught_by_methods: string[] | null
          component: string | null
          issue_count: number | null
          recent_issues: string[] | null
          severities: string[] | null
        }
        Relationships: []
      }
      v_adhd_daily_summary: {
        Row: {
          completion_rate: number | null
          context_switches: number | null
          date: string | null
          domains: Json | null
          interventions_triggered: number | null
          session_recommendation: string | null
          tasks_abandoned: number | null
          tasks_completed: number | null
        }
        Relationships: []
      }
      v_blocker_summary: {
        Row: {
          active_count: number | null
          avg_resolution_minutes: number | null
          blocker_type: string | null
          resolved_count: number | null
          responsible_party: string | null
          total_occurrences: number | null
        }
        Relationships: []
      }
      v_completion_dashboard: {
        Row: {
          avg_completion_time_minutes: number | null
          calculated_completion_pct: number | null
          claude_responsible_blocks: number | null
          completion_rate: number | null
          infra_responsible_blocks: number | null
          period_start: string | null
          period_type: string | null
          tasks_abandoned: number | null
          tasks_completed: number | null
          tasks_initiated: number | null
          user_responsible_blocks: number | null
        }
        Insert: {
          avg_completion_time_minutes?: number | null
          calculated_completion_pct?: never
          claude_responsible_blocks?: number | null
          completion_rate?: number | null
          infra_responsible_blocks?: number | null
          period_start?: string | null
          period_type?: string | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          tasks_initiated?: number | null
          user_responsible_blocks?: number | null
        }
        Update: {
          avg_completion_time_minutes?: number | null
          calculated_completion_pct?: never
          claude_responsible_blocks?: number | null
          completion_rate?: number | null
          infra_responsible_blocks?: number | null
          period_start?: string | null
          period_type?: string | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          tasks_initiated?: number | null
          user_responsible_blocks?: number | null
        }
        Relationships: []
      }
      v_execution_timeline: {
        Row: {
          blocker_type: string | null
          command: string | null
          creates_deliverable: boolean | null
          deliverable_path: string | null
          executed_at: string | null
          execution_id: number | null
          execution_time_ms: number | null
          status: string | null
          task_id: string | null
          task_title: string | null
          tool_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_executions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "active_tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "task_executions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "v_tasks_needing_attention"
            referencedColumns: ["task_id"]
          },
        ]
      }
      v_intervention_effectiveness: {
        Row: {
          avg_response_minutes: number | null
          intervention_type: string | null
          risk_level: string | null
          success_rate: number | null
          successful: number | null
          total_interventions: number | null
        }
        Relationships: []
      }
      v_open_tasks: {
        Row: {
          complexity: number | null
          description: string | null
          domain: string | null
          minutes_open: number | null
          status: string | null
          task_id: string | null
          verification_status: string | null
        }
        Insert: {
          complexity?: number | null
          description?: string | null
          domain?: string | null
          minutes_open?: never
          status?: string | null
          task_id?: string | null
          verification_status?: string | null
        }
        Update: {
          complexity?: number | null
          description?: string | null
          domain?: string | null
          minutes_open?: never
          status?: string | null
          task_id?: string | null
          verification_status?: string | null
        }
        Relationships: []
      }
      v_search_all: {
        Row: {
          content_summary: string | null
          created_at: string | null
          id: number | null
          item_date: string | null
          item_name: string | null
          item_type: string | null
          location_path: string | null
          project: string | null
          tags: string[] | null
        }
        Insert: {
          content_summary?: string | null
          created_at?: string | null
          id?: number | null
          item_date?: string | null
          item_name?: string | null
          item_type?: string | null
          location_path?: string | null
          project?: string | null
          tags?: string[] | null
        }
        Update: {
          content_summary?: string | null
          created_at?: string | null
          id?: number | null
          item_date?: string | null
          item_name?: string | null
          item_type?: string | null
          location_path?: string | null
          project?: string | null
          tags?: string[] | null
        }
        Relationships: []
      }
      v_session_overview: {
        Row: {
          adhd_interventions_triggered: number | null
          completion_rate_pct: number | null
          primary_domain: string | null
          session_id: string | null
          started_at: string | null
          tasks_abandoned: number | null
          tasks_completed: number | null
          tasks_initiated: number | null
          total_messages: number | null
          total_tool_calls: number | null
        }
        Insert: {
          adhd_interventions_triggered?: number | null
          completion_rate_pct?: never
          primary_domain?: string | null
          session_id?: string | null
          started_at?: string | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          tasks_initiated?: number | null
          total_messages?: number | null
          total_tool_calls?: number | null
        }
        Update: {
          adhd_interventions_triggered?: number | null
          completion_rate_pct?: never
          primary_domain?: string | null
          session_id?: string | null
          started_at?: string | null
          tasks_abandoned?: number | null
          tasks_completed?: number | null
          tasks_initiated?: number | null
          total_messages?: number | null
          total_tool_calls?: number | null
        }
        Relationships: []
      }
      v_tasks_needing_attention: {
        Row: {
          active_blockers: number | null
          blocker_reason: string | null
          completion_pct: number | null
          force_strategy: string | null
          intervention_count: number | null
          intervention_level: number | null
          minutes_open: number | null
          status: string | null
          task_id: string | null
          title: string | null
          who_blocked: string | null
        }
        Relationships: []
      }
      validation_effectiveness: {
        Row: {
          bugs_caught: number | null
          components_protected: string[] | null
          issues_prevented: number | null
          validation_checklist_used: string | null
        }
        Relationships: []
      }
      workflow_summaries: {
        Row: {
          approvals_denied: number | null
          approvals_granted: number | null
          ended_at: string | null
          failed_scrapes: number | null
          security_violations: number | null
          started_at: string | null
          successful_scrapes: number | null
          total_events: number | null
          workflow_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      _postgis_deprecate: {
        Args: { newname: string; oldname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { col: string; tbl: unknown }
        Returns: unknown
      }
      _postgis_pgsql_version: { Args: never; Returns: string }
      _postgis_scripts_pgsql_version: { Args: never; Returns: string }
      _postgis_selectivity: {
        Args: { att_name: string; geom: unknown; mode?: string; tbl: unknown }
        Returns: number
      }
      _postgis_stats: {
        Args: { ""?: string; att_name: string; tbl: unknown }
        Returns: string
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_coveredby:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_covers:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      _st_equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_sortablehash: { Args: { geom: unknown }; Returns: number }
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_voronoi: {
        Args: {
          clip?: unknown
          g1: unknown
          return_polygons?: boolean
          tolerance?: number
        }
        Returns: unknown
      }
      _st_within: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      addauth: { Args: { "": string }; Returns: boolean }
      addgeometrycolumn:
        | {
            Args: {
              catalog_name: string
              column_name: string
              new_dim: number
              new_srid_in: number
              new_type: string
              schema_name: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              new_dim: number
              new_srid: number
              new_type: string
              schema_name: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              new_dim: number
              new_srid: number
              new_type: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
      claim_scout_pass: {
        Args: {
          p_pass_code: string
          p_recipient_email: string
          p_recipient_id: string
        }
        Returns: {
          batch_number: number
          claimed_at: string | null
          county_access: Json | null
          created_at: string | null
          expires_at: string
          id: string
          pass_code: string
          quarter: string
          recipient_email: string | null
          recipient_id: string | null
          referrer_email: string
          referrer_id: string
          shared_at: string | null
          shared_via: string | null
          status: string
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }
        SetofOptions: {
          from: "*"
          to: "scout_passes"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      complete_task: {
        Args: { pull_request_url?: string; task_id: string }
        Returns: boolean
      }
      count_by_jurisdiction: {
        Args: never
        Returns: {
          jurisdiction_id: number
          jurisdiction_name: string
          parcel_count: number
        }[]
      }
      disablelongtransactions: { Args: never; Returns: string }
      dropgeometrycolumn:
        | {
            Args: {
              catalog_name: string
              column_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | { Args: { column_name: string; table_name: string }; Returns: string }
      dropgeometrytable:
        | {
            Args: {
              catalog_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | { Args: { schema_name: string; table_name: string }; Returns: string }
        | { Args: { table_name: string }; Returns: string }
      enablelongtransactions: { Args: never; Returns: string }
      equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      fail_task: {
        Args: { error_msg?: string; task_id: string }
        Returns: boolean
      }
      generate_scout_passes: {
        Args: {
          p_county_access?: Json
          p_quarter?: string
          p_user_email: string
          p_user_id: string
        }
        Returns: {
          batch_number: number
          claimed_at: string | null
          county_access: Json | null
          created_at: string | null
          expires_at: string
          id: string
          pass_code: string
          quarter: string
          recipient_email: string | null
          recipient_id: string | null
          referrer_email: string
          referrer_id: string
          shared_at: string | null
          shared_via: string | null
          status: string
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "scout_passes"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      generate_weekly_summary: {
        Args: { p_week_start?: string }
        Returns: string
      }
      geometry: { Args: { "": string }; Returns: unknown }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geomfromewkt: { Args: { "": string }; Returns: unknown }
      get_next_task: {
        Args: { target_repo?: string }
        Returns: {
          description: string
          id: string
          priority: number
          repo: string
          title: string
        }[]
      }
      get_properties_in_area: {
        Args: { listing_type_filter?: string; polygon_geojson: string }
        Returns: {
          address_street: string
          id: number
          price_current: number
          rooms: number
          square_meters: number
        }[]
      }
      gettransactionid: { Args: never; Returns: unknown }
      increment_query_count: { Args: { p_user_id: string }; Returns: undefined }
      log_bug: {
        Args: {
          p_caught_by: string
          p_component: string
          p_description: string
          p_git_commit?: string
          p_severity: string
          p_validation_checklist?: string
        }
        Returns: string
      }
      log_deployment: {
        Args: {
          p_component: string
          p_description: string
          p_git_commit: string
          p_success: boolean
        }
        Returns: string
      }
      longtransactionsenabled: { Args: never; Returns: boolean }
      populate_geometry_columns:
        | { Args: { tbl_oid: unknown; use_typmod?: boolean }; Returns: number }
        | { Args: { use_typmod?: boolean }; Returns: string }
      postgis_constraint_dims: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: string
      }
      postgis_extensions_upgrade: { Args: never; Returns: string }
      postgis_full_version: { Args: never; Returns: string }
      postgis_geos_version: { Args: never; Returns: string }
      postgis_lib_build_date: { Args: never; Returns: string }
      postgis_lib_revision: { Args: never; Returns: string }
      postgis_lib_version: { Args: never; Returns: string }
      postgis_libjson_version: { Args: never; Returns: string }
      postgis_liblwgeom_version: { Args: never; Returns: string }
      postgis_libprotobuf_version: { Args: never; Returns: string }
      postgis_libxml_version: { Args: never; Returns: string }
      postgis_proj_version: { Args: never; Returns: string }
      postgis_scripts_build_date: { Args: never; Returns: string }
      postgis_scripts_installed: { Args: never; Returns: string }
      postgis_scripts_released: { Args: never; Returns: string }
      postgis_svn_version: { Args: never; Returns: string }
      postgis_type_name: {
        Args: {
          coord_dimension: number
          geomname: string
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_version: { Args: never; Returns: string }
      postgis_wagyu_version: { Args: never; Returns: string }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle:
        | { Args: { line1: unknown; line2: unknown }; Returns: number }
        | {
            Args: { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
            Returns: number
          }
      st_area:
        | { Args: { geog: unknown; use_spheroid?: boolean }; Returns: number }
        | { Args: { "": string }; Returns: number }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkt: { Args: { "": string }; Returns: string }
      st_asgeojson:
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | {
            Args: {
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
              r: Record<string, unknown>
            }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_asgml:
        | {
            Args: {
              geog: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
            }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
        | {
            Args: {
              geog: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
              version: number
            }
            Returns: string
          }
        | {
            Args: {
              geom: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
              version: number
            }
            Returns: string
          }
      st_askml:
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: { Args: { format?: string; geom: unknown }; Returns: string }
      st_asmvtgeom: {
        Args: {
          bounds: unknown
          buffer?: number
          clip_geom?: boolean
          extent?: number
          geom: unknown
        }
        Returns: unknown
      }
      st_assvg:
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; rel?: number }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; rel?: number }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_astext: { Args: { "": string }; Returns: string }
      st_astwkb:
        | {
            Args: {
              geom: unknown
              prec?: number
              prec_m?: number
              prec_z?: number
              with_boxes?: boolean
              with_sizes?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_m?: number
              prec_z?: number
              with_boxes?: boolean
              with_sizes?: boolean
            }
            Returns: string
          }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: number }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
      st_boundingdiagonal: {
        Args: { fits?: boolean; geom: unknown }
        Returns: unknown
      }
      st_buffer:
        | {
            Args: { geom: unknown; options?: string; radius: number }
            Returns: unknown
          }
        | {
            Args: { geom: unknown; quadsegs: number; radius: number }
            Returns: unknown
          }
      st_centroid: { Args: { "": string }; Returns: unknown }
      st_clipbybox2d: {
        Args: { box: unknown; geom: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collect: { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_concavehull: {
        Args: {
          param_allow_holes?: boolean
          param_geom: unknown
          param_pctconvex: number
        }
        Returns: unknown
      }
      st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_coorddim: { Args: { geometry: unknown }; Returns: number }
      st_coveredby:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_covers:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_crosses: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_curvetoline: {
        Args: { flags?: number; geom: unknown; tol?: number; toltype?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { flags?: number; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_distance:
        | {
            Args: { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
            Returns: number
          }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
      st_distancesphere:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
        | {
            Args: { geom1: unknown; geom2: unknown; radius: number }
            Returns: number
          }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      st_equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_expand:
        | { Args: { box: unknown; dx: number; dy: number }; Returns: unknown }
        | {
            Args: { box: unknown; dx: number; dy: number; dz?: number }
            Returns: unknown
          }
        | {
            Args: {
              dm?: number
              dx: number
              dy: number
              dz?: number
              geom: unknown
            }
            Returns: unknown
          }
      st_force3d: { Args: { geom: unknown; zvalue?: number }; Returns: unknown }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; mvalue?: number; zvalue?: number }
        Returns: unknown
      }
      st_generatepoints:
        | { Args: { area: unknown; npoints: number }; Returns: unknown }
        | {
            Args: { area: unknown; npoints: number; seed: number }
            Returns: unknown
          }
      st_geogfromtext: { Args: { "": string }; Returns: unknown }
      st_geographyfromtext: { Args: { "": string }; Returns: unknown }
      st_geohash:
        | { Args: { geog: unknown; maxchars?: number }; Returns: string }
        | { Args: { geom: unknown; maxchars?: number }; Returns: string }
      st_geomcollfromtext: { Args: { "": string }; Returns: unknown }
      st_geometricmedian: {
        Args: {
          fail_if_not_converged?: boolean
          g: unknown
          max_iter?: number
          tolerance?: number
        }
        Returns: unknown
      }
      st_geometryfromtext: { Args: { "": string }; Returns: unknown }
      st_geomfromewkt: { Args: { "": string }; Returns: unknown }
      st_geomfromgeojson:
        | { Args: { "": Json }; Returns: unknown }
        | { Args: { "": Json }; Returns: unknown }
        | { Args: { "": string }; Returns: unknown }
      st_geomfromgml: { Args: { "": string }; Returns: unknown }
      st_geomfromkml: { Args: { "": string }; Returns: unknown }
      st_geomfrommarc21: { Args: { marc21xml: string }; Returns: unknown }
      st_geomfromtext: { Args: { "": string }; Returns: unknown }
      st_gmltosql: { Args: { "": string }; Returns: unknown }
      st_hasarc: { Args: { geometry: unknown }; Returns: boolean }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { cell_i: number; cell_j: number; origin?: unknown; size: number }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { bounds: unknown; size: number }
        Returns: Record<string, unknown>[]
      }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_intersects:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_isvaliddetail: {
        Args: { flags?: number; geom: unknown }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
        SetofOptions: {
          from: "*"
          to: "valid_detail"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      st_length:
        | { Args: { geog: unknown; use_spheroid?: boolean }; Returns: number }
        | { Args: { "": string }; Returns: number }
      st_letters: { Args: { font?: Json; letters: string }; Returns: unknown }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { nprecision?: number; txtin: string }
        Returns: unknown
      }
      st_linefromtext: { Args: { "": string }; Returns: unknown }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linetocurve: { Args: { geometry: unknown }; Returns: unknown }
      st_locatealong: {
        Args: { geometry: unknown; leftrightoffset?: number; measure: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          frommeasure: number
          geometry: unknown
          leftrightoffset?: number
          tomeasure: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { fromelevation: number; geometry: unknown; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { geom: unknown; params: string }
        Returns: unknown
      }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_mlinefromtext: { Args: { "": string }; Returns: unknown }
      st_mpointfromtext: { Args: { "": string }; Returns: unknown }
      st_mpolyfromtext: { Args: { "": string }; Returns: unknown }
      st_multilinestringfromtext: { Args: { "": string }; Returns: unknown }
      st_multipointfromtext: { Args: { "": string }; Returns: unknown }
      st_multipolygonfromtext: { Args: { "": string }; Returns: unknown }
      st_node: { Args: { g: unknown }; Returns: unknown }
      st_normalize: { Args: { geom: unknown }; Returns: unknown }
      st_offsetcurve: {
        Args: { distance: number; line: unknown; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_perimeter: {
        Args: { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_pointfromtext: { Args: { "": string }; Returns: unknown }
      st_pointm: {
        Args: {
          mcoordinate: number
          srid?: number
          xcoordinate: number
          ycoordinate: number
        }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          srid?: number
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          mcoordinate: number
          srid?: number
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
        }
        Returns: unknown
      }
      st_polyfromtext: { Args: { "": string }; Returns: unknown }
      st_polygonfromtext: { Args: { "": string }; Returns: unknown }
      st_project: {
        Args: { azimuth: number; distance: number; geog: unknown }
        Returns: unknown
      }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_m?: number
          prec_x: number
          prec_y?: number
          prec_z?: number
        }
        Returns: unknown
      }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: { Args: { geom1: unknown; geom2: unknown }; Returns: string }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setsrid:
        | { Args: { geog: unknown; srid: number }; Returns: unknown }
        | { Args: { geom: unknown; srid: number }; Returns: unknown }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; is_outer?: boolean; vertex_fraction: number }
        Returns: unknown
      }
      st_split: { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_square: {
        Args: { cell_i: number; cell_j: number; origin?: unknown; size: number }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { bounds: unknown; size: number }
        Returns: Record<string, unknown>[]
      }
      st_srid:
        | { Args: { geog: unknown }; Returns: number }
        | { Args: { geom: unknown }; Returns: number }
      st_subdivide: {
        Args: { geom: unknown; gridsize?: number; maxvertices?: number }
        Returns: unknown[]
      }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tileenvelope: {
        Args: {
          bounds?: unknown
          margin?: number
          x: number
          y: number
          zoom: number
        }
        Returns: unknown
      }
      st_touches: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_transform:
        | {
            Args: { from_proj: string; geom: unknown; to_proj: string }
            Returns: unknown
          }
        | {
            Args: { from_proj: string; geom: unknown; to_srid: number }
            Returns: unknown
          }
        | { Args: { geom: unknown; to_proj: string }; Returns: unknown }
      st_triangulatepolygon: { Args: { g1: unknown }; Returns: unknown }
      st_union:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
        | {
            Args: { geom1: unknown; geom2: unknown; gridsize: number }
            Returns: unknown
          }
      st_voronoilines: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_within: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_wkbtosql: { Args: { wkb: string }; Returns: unknown }
      st_wkttosql: { Args: { "": string }; Returns: unknown }
      st_wrapx: {
        Args: { geom: unknown; move: number; wrap: number }
        Returns: unknown
      }
      start_task: { Args: { task_id: string }; Returns: boolean }
      unlockrows: { Args: { "": string }; Returns: number }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          column_name: string
          new_srid_in: number
          schema_name: string
          table_name: string
        }
        Returns: string
      }
      verify_audit_checksum: { Args: { p_event_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null
        geom: unknown
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
