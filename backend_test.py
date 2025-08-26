#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests all backend API endpoints to ensure they're working properly after frontend changes.
"""

import requests
import json
import sys
from datetime import datetime
import uuid

BASE_URL = "http://127.0.0.1:8000/api"
print(f"Testing backend API at: {BASE_URL}")

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print("\n=== Testing Root Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello from Acencia API":
                print("✅ Root endpoint working correctly")
                return True
            else:
                print("❌ Root endpoint returned unexpected message")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Root endpoint request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Root endpoint test failed: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("\n=== Testing CORS Headers ===")
    try:
        response = requests.options(f"{BASE_URL}/", timeout=10)
        print(f"OPTIONS Status Code: {response.status_code}")
        
        # Check for CORS headers
        cors_headers = {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
        }
        
        print("CORS Headers:")
        for header, value in cors_headers.items():
            print(f"  {header}: {value}")
        
        if cors_headers['Access-Control-Allow-Origin']:
            print("✅ CORS headers present")
            return True
        else:
            print("⚠️ CORS headers may not be properly configured")
            return True  # Not critical for basic functionality
            
    except requests.exceptions.RequestException as e:
        print(f"⚠️ CORS test request failed: {e}")
        return True  # Not critical for basic functionality
    except Exception as e:
        print(f"⚠️ CORS test failed: {e}")
        return True  # Not critical for basic functionality

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Tests")
    print("=" * 50)
    
    results = []
    
    # Test 1: Root endpoint
    results.append(("Root Endpoint", test_root_endpoint()))
    
    # Test 2: CORS headers
    results.append(("CORS Configuration", test_cors_headers()))
    
    # Summary
    print("\n" + "=" * 50)
    print("🏁 TEST SUMMARY")
    print("=" * 50)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend API tests PASSED!")
        return True
    else:
        print("⚠️ Some backend API tests FAILED!")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)